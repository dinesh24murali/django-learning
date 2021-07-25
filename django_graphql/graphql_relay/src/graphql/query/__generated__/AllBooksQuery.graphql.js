/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AllBooksQueryVariables = {||};
export type AllBooksQueryResponse = {|
  +allBooks: ?$ReadOnlyArray<?{|
    +id: string,
    +title: string,
    +author: string,
    +yearPublished: string,
    +review: number,
  |}>
|};
export type AllBooksQuery = {|
  variables: AllBooksQueryVariables,
  response: AllBooksQueryResponse,
|};
*/


/*
query AllBooksQuery {
  allBooks {
    id
    title
    author
    yearPublished
    review
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "BookType",
    "kind": "LinkedField",
    "name": "allBooks",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "author",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "yearPublished",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "review",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AllBooksQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AllBooksQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c5c38c3583176b66a590fee4d65ac8d9",
    "id": null,
    "metadata": {},
    "name": "AllBooksQuery",
    "operationKind": "query",
    "text": "query AllBooksQuery {\n  allBooks {\n    id\n    title\n    author\n    yearPublished\n    review\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '635f704572a3881156b5a3d698ab5e97';

module.exports = node;
