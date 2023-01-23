import React, { useCallback, useState } from 'react';
import { ScaledSize, StyleSheet, TextInput, useWindowDimensions, View } from 'react-native';
import ColorsPalette from '../constants/ColorsPalette';

interface CustomTextInputProps {
    placeholder: string;
    onSubmit?: (username: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ placeholder, onSubmit, ...props }) => {
    const dimensions = useWindowDimensions();
    const styles = style(dimensions);

    const [username, setUsername] = useState('');
    const [isFocus, setIsFocused] = useState<boolean>(false);

    const customOnFocus = useCallback(() => {
        props?.onFocus;
        setIsFocused(true);
    }, [props]);

    const customOnBlur = useCallback(() => {
        props?.onBlur;
        setIsFocused(false);
    }, [props]);

    return (
        <View style={[styles.textInputContainer, isFocus && { borderColor: ColorsPalette.BLUE_ACCENT }]}>
            <TextInput
                style={styles.inputTextField}
                placeholder={placeholder}
                onChangeText={(text) => setUsername(text)}
                value={username}
                onSubmitEditing={() => onSubmit(username)}
                onFocus={customOnFocus}
                onBlur={customOnBlur}
            />
        </View>
    );
};

export default CustomTextInput;

const style = (dimensions: ScaledSize) =>
    StyleSheet.create({
        textInputContainer: {
            width: dimensions.width - 32,
            height: 45,
            backgroundColor: ColorsPalette.LIGHT_BACKGROUND,
            borderRadius: 5,
            borderWidth: 1.5,
            borderColor: ColorsPalette.GRAY,
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingHorizontal: 10,
        },
        inputTextField: {
            width: '100%',
            height: '90%',
        },
    });
