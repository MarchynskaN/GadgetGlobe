import { axios_obj } from '../http-common.js';

class GadgetService {

    searchBook(name) {
        return axios_obj.get(`gadgets/name/${name}`)
    }

}

export default new gadgetService();