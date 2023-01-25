import { Octokit } from '@octokit/core';
import Config from 'react-native-config';

const octokit = new Octokit({ auth: Config.GIT_HUB_ACCESS_TOKEN });

/* As you requested I followed API specs adherence from the official docs by using octokit. */
const getStargazersList = async (repoOwner: string, repoName: string) => {
    try {
        let response = await octokit.request(`GET /repos/${repoOwner}/${repoName}/stargazers?per_page=30`, {
            owner: repoOwner,
            repo: repoName,
        });

        return response.data;
    } catch (error: any) {
        console.error('Error: ', error.response.data.message);
    }
};

export { getStargazersList };
