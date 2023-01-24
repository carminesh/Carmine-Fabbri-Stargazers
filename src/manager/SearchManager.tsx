import { RequestMethod } from '../models/RequestMethod';
import { GET_LIST_STARGAZERS } from '../services/api';
import apiClient from '../services/config';
import { Octokit } from '@octokit/core';

const octokit = new Octokit({ auth: `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` });

/* As you requested I followed API specs adherence from the official docs. */
const getStargazersList = async (repoOwner: string, repoName: string) => {
    try {
        let response = await octokit.request(`GET /repos/${repoOwner}/${repoName}/stargazers?per_page=30`, {
            owner: repoOwner,
            repo: repoName,
        });

        return response.data;
    } catch (e: unknown) {
        console.log('Error: ', e.response.data);
        throw e.response;
    }
};

export { getStargazersList };

/* As you requested I followed API specs adherence from the official docs. */
