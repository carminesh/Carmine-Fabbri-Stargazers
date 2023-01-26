import { Image, ImageSourcePropType, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import React from 'react';
import { style } from './SubmitButton.style';

interface SubmitButtonProps {
    testID?: string;
    icon?: ImageSourcePropType;
    isButtonDisabled: boolean;
    onPressCallback: () => Promise<void>;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ testID, icon, isButtonDisabled, onPressCallback }) => {
    const dimensions = useWindowDimensions();
    const styles = style(dimensions);

    return (
        <TouchableOpacity
            testID={testID ? testID : 'submit-button'}
            style={[styles.buttonContainer, isButtonDisabled && { opacity: 0.7 }]}
            disabled={isButtonDisabled}
            onPress={() => onPressCallback()}
        >
            {icon && <Image testID="submit-button-icon" style={styles.icon} source={icon} resizeMode="contain" />}
            <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
    );
};

export default SubmitButton;
