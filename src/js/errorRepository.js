export default class ErrorRepository {
    constructor () {
        this.map = new Map();
    };

    addError (key, value) {
        this.map.set(key, value);
        return this.map
    }

    translateCode (code) {
        if (this.map.has(code)) {
            return this.map.get(code);
        } else {
            throw new Error ("Unknown error");
        }
    }
}