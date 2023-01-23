import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ColorsPalette from './src/constants/ColorsPalette';
import InnerApp from './src/screens/InnerApp';

function App(): JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <InnerApp />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorsPalette.LIGHT_BACKGROUND,
    },
});

export default App;
