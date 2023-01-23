import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ColorsPalette from '../constants/ColorsPalette';
import SearchSection from '../components/SearchSection';

const InnerApp: React.FC = () => {
    return (
        <View style={styles.viewContianer}>
            <SearchSection />
        </View>
    );
};

export default InnerApp;

const styles = StyleSheet.create({
    viewContianer: {
        width: '100%',
        height: '100%',
        backgroundColor: ColorsPalette.LIGHT_BACKGROUND,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
