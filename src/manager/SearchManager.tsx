import { RequestMethod } from '../models/RequestMethod';
import { GET_LIST_STARGAZERS } from '../services/api';
import apiClient from '../services/config';

/* This method is used to retrieve data from the Github List Stargazers. */
const getStargazersList = async (repoOwner: string, repoName: string) => {
    try {
        let response = await apiClient(GET_LIST_STARGAZERS(repoOwner, repoName), {
            method: RequestMethod.GET,
        });
        return response.data;
    } catch (e: unknown) {
        console.log('Error: ', e.response.data);
        throw e.response;
    }
};

export { getStargazersList };
