import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ColorsPalette from '../constants/ColorsPalette';
import CustomTextInput from '../atoms/TextInput';
import SubmitButton from '../atoms/SubmitButton';

const InnerApp: React.FC = () => {
    return (
        <View style={styles.viewContianer}>
            <CustomTextInput placeholder={'Username'} />
            <CustomTextInput placeholder={'Repository'} />
            <SubmitButton isButtonDisabled={false} />
        </View>
    );
};

export default InnerApp;

const styles = StyleSheet.create({
    viewContianer: {
        paddingVertical: 16,
        width: '100%',
        height: '50%',
        backgroundColor: ColorsPalette.LIGHT_BACKGROUND,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
