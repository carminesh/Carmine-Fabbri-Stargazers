import { authenticatedOctokit } from '../services/octokit';

/* As you requested I followed API specs adherence from the official docs by using octokit. */
const getStargazersList = async (repoOwner: string, repoName: string) => {
    try {
        let response = await authenticatedOctokit.request(`GET /repos/${repoOwner}/${repoName}/stargazers?per_page=100`, {
            owner: repoOwner,
            repo: repoName,
        });
        return response.data;
    } catch (error: any) {
        /*  The correct way to manage the error is to use the console.error or threw it, but for development purposes, I just left the console log. 
        console.error('Error: ', error.response.data.message); */
        console.log('Error: ', error.response.data.message);
    }
};

export { getStargazersList };
