const BASE_URL: string = 'https://api.github.com';

export const GET_LIST_STARGAZERS = (repoOwner: string, repoName: string) => BASE_URL + '/repos/' + repoOwner + '/' + repoName + '/stargazers?per_page=30';
