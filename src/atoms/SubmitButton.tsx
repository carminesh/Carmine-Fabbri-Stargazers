import { ScaledSize, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import React from 'react';
import ColorsPalette from '../constants/ColorsPalette';

interface SubmitButtonProps {
    isButtonEnabled: boolean;
    onPressCallback: () => Promise<void>;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isButtonEnabled, onPressCallback }) => {
    const dimensions = useWindowDimensions();
    const styles = style(dimensions);

    return (
        <TouchableOpacity style={[styles.buttonContainer, isButtonEnabled && { opacity: 0.7 }]} disabled={isButtonEnabled} onPress={() => onPressCallback()}>
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
        },
        buttonText: {
            color: ColorsPalette.WHITE,
            fontWeight: 'bold',
        },
    });
