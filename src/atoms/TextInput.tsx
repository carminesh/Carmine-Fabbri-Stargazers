import React, { useCallback, useState } from 'react';
import { Image, ImageSourcePropType, ScaledSize, StyleSheet, TextInput, useWindowDimensions, View } from 'react-native';
import ColorsPalette from '../constants/ColorsPalette';

interface CustomTextInputProps {
    icon?: ImageSourcePropType;
    placeholder: string;
    textValue: string;
    onChangeText: React.Dispatch<React.SetStateAction<string>>;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ icon, placeholder, textValue, onChangeText, ...props }) => {
    const dimensions = useWindowDimensions();
    const styles = style(dimensions);

    const [isFocused, setIsFocused] = useState<boolean>(false);

    const customOnFocus = useCallback(() => {
        props?.onFocus;
        setIsFocused(true);
    }, [props]);

    const customOnBlur = useCallback(() => {
        props?.onBlur;
        setIsFocused(false);
    }, [props]);

    return (
        <View style={[styles.textInputContainer, isFocused && { borderColor: ColorsPalette.BLUE_ACCENT }]}>
            {icon && <Image style={[styles.icon, isFocused && { tintColor: ColorsPalette.BLUE_ACCENT }]} source={icon} resizeMode="contain" />}
            <TextInput style={styles.inputTextField} placeholder={placeholder} onChangeText={(text) => onChangeText(text)} value={textValue} onFocus={customOnFocus} onBlur={customOnBlur} />
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
            borderWidth: 1,
            borderColor: ColorsPalette.GRAY,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
        },
        icon: {
            tintColor: ColorsPalette.GRAY,
            marginRight: 10,
            width: 15,
            height: 15,
        },
        inputTextField: {
            width: '100%',
            height: '70%',
        },
    });
