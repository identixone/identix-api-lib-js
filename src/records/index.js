import {
    post,
    get,
    headersAddBearerToken,
    CONTENT_TYPE_HEADERS
} from '../request.js';
import Api from '../Api'

const RECORDS = "records";

export default class Records extends Api {
    constructor(props){
        super(props);
    }

    records(filters) {
        const headers = {
            Authorization: `Token ${this.token}`
        };
        return get(`${this.endpoint}/${RECORDS}/`, filters, headers)
            .then(body => {
                return body
            });
    }
}