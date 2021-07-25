import React from 'react';
import {
  Environment,
  Network,
  RecordSource,
  Store,
  fetchQuery as fQ,
} from 'relay-runtime';
import {
  commitMutation,
} from 'react-relay';

function network(
  operation,
  variables,
) {
  let headers = { 'Content-Type': 'application/json' }
  return fetch(`${process.env.REACT_APP_BASE_URL}/graphql`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(network),
  store: new Store(new RecordSource()),
});

const loaderHtml = () => {
  //   return `<div class="loader d-flex-center flex-column">
  //   <span class="loader-label">Processing</span>
  //   <img class="loader-icon" src="/img/eb-logo.svg" alt="" />
  // </div>`
  return `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`
}
function mutateBase({ mutation, variables, onSuccess, onErrors }) {
  const div = document.createElement('div')
  div.id = 'mutateOverlay'
  div.classList.add('loader-overlay')
  div.innerHTML = loaderHtml()
  const root = document.getElementById('root')
  root.appendChild(div)
  const onCompleted = (response, errors) => {
    root.removeChild(div)
    return onSuccess(response);
  }
  const onError = (error) => {
    root.removeChild(div)
    return onErrors()
  }
  return commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted,
      onError
    }
  );
}

function mutate({ mutation, input, onSuccess = () => {}, onErrors = () => { } }) {
  const variables = { input };
  return mutateBase({ mutation, variables, onSuccess, onErrors });
}

function fetchQuery(query, variables = {}) {
  return fQ(environment, query, variables)
}

export { mutate, fetchQuery, environment, mutateBase };
