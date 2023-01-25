import { Octokit } from '@octokit/core';
import Config from 'react-native-config';

export const authenticatedOctokit = new Octokit({ auth: Config.GIT_HUB_ACCESS_TOKEN });