import React, { useCallback, useState } from 'react';
import { Image, ImageSourcePropType, TextInput, useWindowDimensions, View } from 'react-native';
import ColorsPalette from '../../constants/ColorsPalette';
import { style } from './CustomTextInput.style';

interface CustomTextInputProps {
    testID?: string;
    icon?: ImageSourcePropType;
    placeholder: string;
    textValue: string;
    onChangeText: React.Dispatch<React.SetStateAction<string>>;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ testID, icon, placeholder, textValue, onChangeText, ...props }) => {
    const dimensions = useWindowDimensions();
    const styles = style(dimensions);

    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <View testID="text-input-container" style={[styles.textInputContainer, isFocused && { borderColor: ColorsPalette.BLUE_ACCENT }]}>
            {icon && <Image testID="custom-text-input-icon" style={[styles.icon, isFocused && { tintColor: ColorsPalette.BLUE_ACCENT }]} source={icon} resizeMode="contain" />}
            <TextInput
                testID={testID ? testID : 'custom-text-input'}
                style={styles.inputTextField}
                placeholder={placeholder}
                onChangeText={(text) => onChangeText(text)}
                value={textValue}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </View>
    );
};

export default CustomTextInput;
