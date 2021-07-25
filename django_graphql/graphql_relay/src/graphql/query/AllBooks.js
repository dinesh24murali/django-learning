import graphql from 'babel-plugin-relay/macro';

const AllBooks = graphql`
query AllBooksQuery{
    allBooks {
        id
        title
        author
        yearPublished
        review
    }
}
`

export default AllBooks;
