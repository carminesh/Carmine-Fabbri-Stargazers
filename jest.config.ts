import type {Config} from 'jest';

const config: Config = {
    preset: "react-native",
    verbose: true,
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"]

};

export default config;