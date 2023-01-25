import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SubmitButton from '../src/atoms/SubmitButton/SubmitButton';
import renderer from 'react-test-renderer';

describe('SubmitButton testing', () => {
    it('renders correctly', () => {
        const onPressCallback = jest.fn();
        const tree = renderer.create(<SubmitButton isButtonEnabled={true} onPressCallback={onPressCallback} icon={{ uri: 'https://example.com/icon.png' }} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should call the onPressCallback function when pressed', async () => {
        const onPressCallback = jest.fn();
        const { getByTestId } = render(<SubmitButton isButtonEnabled={true} onPressCallback={onPressCallback} />);

        const button = getByTestId('submit-button');
        fireEvent.press(button);
        expect(onPressCallback).toHaveBeenCalled();
    });

    it('should not call the onPressCallback function when button is disabled', async () => {
        const onPressCallback = jest.fn();
        const { getByTestId } = render(<SubmitButton isButtonEnabled={false} onPressCallback={onPressCallback} />);

        const button = getByTestId('submit-button');
        fireEvent.press(button);
        expect(onPressCallback).not.toHaveBeenCalled();
    });

    it('should display the icon passed as a prop', async () => {
        const onPressCallback = jest.fn();
        const icon = { uri: 'https://example.com/icon.png' };
        const { queryByTestId } = render(<SubmitButton isButtonEnabled={true} onPressCallback={onPressCallback} icon={icon} />);

        const iconImage = queryByTestId('submit-button-icon');
        expect(iconImage).toBeTruthy();
    });

    it('should not display an icon if not passed as a prop', async () => {
        const onPressCallback = jest.fn();
        const { queryByTestId } = render(<SubmitButton isButtonEnabled={true} onPressCallback={onPressCallback} />);

        const iconImage = queryByTestId('submit-button-icon');
        expect(iconImage).toBeFalsy();
    });
});
