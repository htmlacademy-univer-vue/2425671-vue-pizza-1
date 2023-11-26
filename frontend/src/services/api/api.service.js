import axios, { AxiosError } from "axios"

class ApiError extends Error {
    constructor(message, response) {
        super(message);
        this.response = response;
    }
}

export class ApiService {
    _getError(e) {
        if (e instanceof AxiosError) {
            return new ApiError(
                e.response.data?.error?.message ?? e.message,
                e.response
            );
        } else {
            return new ApiError(e.message, e.response);
        }
    }

    _wrapper1(method, url) {
        return async () => {
            try {
                const response = await method(url);
                return {
                    __state: "success",
                    ...response,
                };
            } catch(e) {
                return {
                    __state: "error",
                    data: this._getError(e),
                };
            }
        }
    }

    _wrapper2(method, url, body) {
        return async () => {
            try {
                const response = await method(url, body);
                return {
                    __state: "success",
                    ...response,
                };
            } catch(e) {
                return {
                    __state: "error",
                    data: this._getError(e),
                };
            }
        }
    }

    $get(url) {
        return this._wrapper1(axios.get, url)();
    }

    $delete(url) {
        return this._wrapper1(axios.delete, url)();
    }

    $post(url, body) {
        return this._wrapper2(axios.post, url, body)();
    }

    $put(url, body) {
        return this._wrapper2(axios.put, url, body)();
    }
}