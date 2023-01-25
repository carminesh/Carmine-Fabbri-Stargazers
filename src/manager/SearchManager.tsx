import { authenticatedOctokit } from "../services/octokit";


/* As you requested I followed API specs adherence from the official docs by using octokit. */
const getStargazersList = async (repoOwner: string, repoName: string) => {
    try {
        let response = await authenticatedOctokit.request(`GET /repos/${repoOwner}/${repoName}/stargazers?per_page=30`, {
            owner: repoOwner,
            repo: repoName,
        });

        console.log(response.data);
        return response.data;
    } catch (error: any) {
        console.error('Error: ', error.response.data.message);
    }
};

export { getStargazersList };
