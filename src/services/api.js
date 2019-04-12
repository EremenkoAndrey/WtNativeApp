import token from './token';

let instance = null;

class Api {
    constructor() {
        if(!instance){
            instance = this;
        }
        this._baseuUrl = 'https://whotrades.dev.whotrades.net/api/systems/*/rpc/json/oauth/mobile';
        this._authUrl = 'https://whotrades.dev.whotrades.net/api/systems/*/rpc/json/wt_mobile_app';

        return instance;
    }

    get token() {
        if (!this._token) {
            this._token = token;
        }
        return this._token;
    }

    async authorization(login, pass) {
        return new Promise((resolve, reject) => {
            fetch(this._authUrl, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    method: 'getApiSystem.getMobile.getV1.loginPersonToMobileApp',
                    params: [login, pass, 'wt_mobile_app']
                }),
            })
                .then((response) => {
                    if(!response.ok) {
                        return reject(response);
                    }
                    return response.json()
                })
                .then((responseJson) => {
                    const json = JSON.parse(responseJson.result);
                    if (!json.token || !json.token.access_token) {
                        return reject('Incorrect response');
                    }
                    this.token = json.token.access_token;

                    return resolve({
                        status: json.status,
                        token: json.token.access_token
                    });
                })
                .catch((error) => {
                    return reject(error);
                })

        })
    }

    async getUser() {
        try {
            const res = await this.request('getPersonInfoByIdToMobileApp');
            const { user } = JSON.parse(res.result);
            if (user) {
                return Promise.resolve(user);
            }
            return Promise.reject('Unexpected response format')
        } catch (e) {
            return Promise.reject(e)
        }
    }

    async getUserFeed(params) {
        try {
            const res = await this.request('getFeedToMobileApp', 'POST', params);
            const { data } = JSON.parse(res.result);
            if (data) {
                return Promise.resolve(data);
            }
            return Promise.reject('Unexpected response format');
        } catch (e) {
            return Promise.reject(e);
        }
    }

    async request(endpoint, method = 'POST', params = []) {
        try {
            const token = await this.token.get();
            return this._request(endpoint, method, params, token);
        } catch (e) {
            console.log('token is not found');

        }
    }

    async _request(endpoint, method, params, token) {
        let url = this._baseuUrl;
        return new Promise((resolve, reject) => {
            const requestParams = {
                method: method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            };

            if (method.toLocaleUpperCase() === 'POST') {
                requestParams.body = JSON.stringify({
                    jsonrpc: '2.0',
                    method: `getApiSystem.getOAuth.getV1.${endpoint}`,
                    params,
                    oauth_token: token
                })
            } else {
                url = `${this._baseuUrl}${endpoint}`
            }
            console.log('_request params:', url, endpoint, method, requestParams, token);

            fetch(url, requestParams)
                .then((response) => {
                    if(!response.ok) {
                        return reject(response);
                    }
                    return response.json()
                })
                .then((responseJson) => {
                    return resolve(responseJson);
                })
                .catch((error) => {
                    return reject(error);
                })

        })
    }
}

export default new Api();
