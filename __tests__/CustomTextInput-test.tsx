import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import CustomTextInput from '../src/atoms/CustomTextInput/CustomTextInput';
import renderer from 'react-test-renderer';
import ColorsPalette from '../src/constants/ColorsPalette';

describe('CustomTextInput testing', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<CustomTextInput placeholder="Search" textValue="" onChangeText={() => {}} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should change the text value when the input field is changed', async () => {
        const textValue = 'initial value';
        const onChangeText = jest.fn();
        const { getByTestId } = render(<CustomTextInput placeholder="Search" textValue={textValue} onChangeText={onChangeText} />);

        const inputField = getByTestId('custom-text-input');
        fireEvent.changeText(inputField, 'new value');
        expect(onChangeText).toHaveBeenCalledWith('new value');
    });

    it('should not have a border color of blue when the input field is not focused', async () => {
        const textValue = '';
        const onChangeText = jest.fn();
        const { getByTestId } = render(<CustomTextInput placeholder="Search" textValue={textValue} onChangeText={onChangeText} />);

        const textInputContainer = getByTestId('text-input-container');
        expect(textInputContainer).toHaveStyle({ borderColor: ColorsPalette.GRAY });
    });

    it('should display the icon passed as a prop', async () => {
        const icon = { uri: 'https://example.com/icon.png' };
        const { queryByTestId } = render(<CustomTextInput placeholder="Search" textValue="" onChangeText={() => {}} icon={icon} />);

        const iconImage = queryByTestId('custom-text-input-icon');
        expect(iconImage).toBeTruthy();
    });

    it('should not display an icon if not passed as a prop', async () => {
        const { queryByTestId } = render(<CustomTextInput placeholder="Search" textValue="" onChangeText={() => {}} />);

        const iconImage = queryByTestId('custom-text-input-icon');
        expect(iconImage).toBeFalsy();
    });
});
