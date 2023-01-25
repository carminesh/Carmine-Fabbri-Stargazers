import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import UserCell from '../src/atoms/UserCell/UserCell';
import renderer from 'react-test-renderer';

describe('UserCell testing', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<UserCell login="johndoe" id={1} avatar_url="https://example.com/avatar.png" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should display the username passed as a prop', async () => {
        const { getByText } = render(<UserCell login="johndoe" id={1} avatar_url="https://example.com/avatar.png" />);

        const username = getByText('Username: johndoe');
        expect(username).toBeTruthy();
    });

    it('should display the avatar passed as a prop', async () => {
        const { getByTestId } = render(<UserCell login="johndoe" id={1} avatar_url="https://example.com/avatar.png" />);

        const avatar = getByTestId('user-cell-avatar');
        expect(avatar).toBeTruthy();
    });
});
