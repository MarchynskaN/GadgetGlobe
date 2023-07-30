import { axios_obj } from '../../http-common.js';

class GadgetService {

    searchGadget(p_name) {
        return axios_obj.get(`gadgets/p_name/${p_name}`)
    }

}

export default new GadgetService();