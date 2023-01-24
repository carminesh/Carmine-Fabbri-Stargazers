import { Image, ImageSourcePropType, ScaledSize, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import React from 'react';
import ColorsPalette from '../constants/ColorsPalette';

interface SubmitButtonProps {
    icon?: ImageSourcePropType;
    isButtonEnabled: boolean;
    onPressCallback: () => Promise<void>;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ icon, isButtonEnabled, onPressCallback }) => {
    const dimensions = useWindowDimensions();
    const styles = style(dimensions);

    return (
        <TouchableOpacity style={[styles.buttonContainer, isButtonEnabled && { opacity: 0.7 }]} disabled={isButtonEnabled} onPress={() => onPressCallback()}>
            {icon && <Image style={styles.icon} source={icon} resizeMode="contain" />}
            <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
    );
};

export default SubmitButton;

const style = (dimensions: ScaledSize) =>
    StyleSheet.create({
        buttonContainer: {
            width: dimensions.width - 32,
            height: 45,
            backgroundColor: ColorsPalette.BLUE_ACCENT,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            flexDirection: 'row',
        },
        buttonText: {
            color: ColorsPalette.WHITE,
            fontWeight: '600',
        },
        icon: {
            tintColor: ColorsPalette.WHITE,
            marginRight: 10,
            width: 15,
            height: 15,
        },
    });
