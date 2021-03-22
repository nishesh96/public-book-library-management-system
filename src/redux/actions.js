export const ALL_BOOKS_REQUEST = 'ALL_BOOKS_REQUEST'
export const ALL_BOOKS_SUCCESS = 'ALL_BOOKS_SUCCESS'
export const ALL_BOOKS_FAILURE = 'ALL_BOOKS_FAILURE'

export const getAllBooks = () => ({
    type: ALL_BOOKS_REQUEST
})

export const BOOK_ADD_REQUEST = 'BOOK_ADD_REQUEST'
export const BOOK_ADD_SUCCESS = 'BOOK_ADD_SUCCESS'
export const BOOK_ADD_FAILURE = 'BOOK_ADD_FAILURE'

export const addBook = (book) => ({
    type: BOOK_ADD_REQUEST,
    book,
})

export const BOOK_UPDATE_REQUEST = 'BOOK_UPDATE_REQUEST'
export const BOOK_UPDATE_SUCCESS = 'BOOK_UPDATE_SUCCESS'
export const BOOK_UPDATE_FAILURE = 'BOOK_UPDATE_FAILURE'

export const updateBook = (book) => ({
    type: BOOK_UPDATE_REQUEST,
    book,
})

