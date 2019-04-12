import AsyncStorage from '@react-native-community/async-storage';

let instance = null;

class Token {
    constructor() {
        if(!instance){
            instance = this;
        }
        this._token = null;

        return instance;
    }

    async save(newToken) {
        this._token = newToken;
        return AsyncStorage.setItem('userToken', newToken);
    }

    async get() {
        if (this._token) {
            return Promise.resolve(this._token);
        }
        return AsyncStorage.getItem('userToken');
    }

    async clear() {
        return AsyncStorage.clear();
    }
}

export default new Token();
