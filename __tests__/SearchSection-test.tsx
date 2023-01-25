import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import SearchSection from '../src/components/SearchSection/SearchSection';
import { getStargazersList } from '../src/manager/SearchManager';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

jest.mock('../src/manager/SearchManager', () => ({
    getStargazersList: jest.fn(() =>
        Promise.resolve([
            { login: 'user1', id: 1, avatar_url: 'https://example.com/user1.jpg' },
            { login: 'user2', id: 2, avatar_url: 'https://example.com/user2.jpg' },
        ])
    ),
}));

describe('SearchSection', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    it('renders correctly', () => {
        store = mockStore(initialState);
        const setShowEplainer = jest.fn();
        const setIsLoading = jest.fn();
        const tree = renderer
            .create(
                <Provider store={store}>
                    <SearchSection setShowEplainer={setShowEplainer} setIsLoading={setIsLoading} />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render the SearchSection', async () => {
        const setShowEplainer = jest.fn();
        const setIsLoading = jest.fn();
        store = mockStore(initialState);

        const { getByPlaceholderText, getByTestId } = render(
            <Provider store={store}>
                <SearchSection setShowEplainer={setShowEplainer} setIsLoading={setIsLoading} />
            </Provider>
        );

        const userInput = getByPlaceholderText('Search username');
        const repoInput = getByPlaceholderText('Search repository');
        const submitButton = getByTestId('submit-button');

        expect(userInput).toBeTruthy();
        expect(repoInput).toBeTruthy();
        expect(submitButton).toBeTruthy();
    });

    it('should change the input value and enable the submit button', async () => {
        const setShowEplainer = jest.fn();
        const setIsLoading = jest.fn();
        store = mockStore(initialState);

        const { getByPlaceholderText, getByTestId } = render(
            <Provider store={store}>
                <SearchSection setShowEplainer={setShowEplainer} setIsLoading={setIsLoading} />
            </Provider>
        );

        const userInput = getByPlaceholderText('Search username');
        const repoInput = getByPlaceholderText('Search repository');
        const submitButton = getByTestId('submit-button');

        fireEvent.changeText(userInput, 'test-user');
        fireEvent.changeText(repoInput, 'test-repo');

        expect(userInput.props.value).toBe('test-user');
        expect(repoInput.props.value).toBe('test-repo');
        expect(submitButton).not.toBeDisabled();
    });

    it('should call the getStargazersList function when submit button is pressed', async () => {
        store = mockStore(initialState);
        const setShowEplainer = jest.fn();
        const setIsLoading = jest.fn();
        const { getByTestId } = render(
            <Provider store={store}>
                <SearchSection setShowEplainer={setShowEplainer} setIsLoading={setIsLoading} />{' '}
            </Provider>
        );

        const userInput = getByTestId('user-input');
        fireEvent.changeText(userInput, 'nandorojo');
        const repoInput = getByTestId('repo-input');
        fireEvent.changeText(repoInput, 'moti');
        const submitButton = getByTestId('submit-button');
        fireEvent.press(submitButton);
        expect(getStargazersList).toHaveBeenCalledWith('nandorojo', 'moti');
        expect(setIsLoading).toHaveBeenCalledWith(true);
        expect(setShowEplainer).toHaveBeenCalledWith(false);
    });
});
