import axios from 'axios'

class Http {
    constructor() {
        this._service = axios.create({
            timeout: 1000 * 40
        })
    }

    get = (params) => this._service.get(params.url, params.config)

    post = (params) => this._service.post(params.url, params.data, params.config)

    put = (params) => this._service.put(params.url, params.data, params.config)

}

export default new Http()
