import Http from '../../utils/http'

const API_ROOT = 'http://localhost:3001'

const request = (method, endpoint, payload) => {
    const baseUrl = API_ROOT + endpoint
    const params = { url: baseUrl }
    if (payload) {
        params.data = payload
    }
    return Http[method](params)
        .then(response => response.data)
        .catch(err => {
            throw err
        })
}

const getAllBooks = () => {
    return request('get', '/books')
}

const addBook = (book) => {
    return request('post', '/books', book)
}

const updateBook = (book) => {
    const endpoint = `/book/${book.id}`
    return request('put', endpoint, book)
}

export { getAllBooks, addBook, updateBook }