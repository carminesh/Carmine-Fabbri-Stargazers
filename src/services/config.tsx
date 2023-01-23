import axios, { AxiosRequestConfig } from 'axios';

const apiClient = axios.create();

/* Axios interceptor is used for token authentication when the user makes a request to the server. */
apiClient.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token: string = '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';

        let headers: any = {
            Accept: 'application/vnd.github+json',
            'Content-Type': 'application/vnd.github+json',
        };
        if (token) {
            headers.Authorization = 'Bearer ' + token;
        }

        return {
            ...config,
            headers,
        };
    },
    (error) => {
        Promise.reject(error);
    }
);

export default apiClient;
