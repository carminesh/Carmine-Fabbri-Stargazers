import React from 'react';
import { render } from '@testing-library/react-native';
import InnerApp from '../src/screens/InnerApp/InnerApp';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

jest.mock('react-native-config', () => {});

jest.mock('../src/services/octokit.ts', () => 'token');

describe('InnerApp testing', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    it('InnerApp is rendered correctly and match the snapshot', () => {
        store = mockStore(initialState);
        const tree = renderer
            .create(
                <Provider store={store}>
                    <InnerApp />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders the ExplanotarySection by default', () => {
        store = mockStore(initialState);
        const { getByTestId } = render(
            <Provider store={store}>
                <InnerApp />
            </Provider>
        );

        expect(getByTestId('explanotary-section')).toBeTruthy();
    });
});
