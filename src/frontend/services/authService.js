import { axios_obj } from '../../http-common.js';

class AuthService {

    login(data) {

        return axios_obj.post("/user/login",data)
    }

    register(data) {
        return axios_obj.post("/user/register", data)
    }
}

export default new AuthService();