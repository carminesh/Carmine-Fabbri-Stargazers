import { Image, ImageSourcePropType, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import React from 'react';
import { style } from './SubmitButton.style';

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

