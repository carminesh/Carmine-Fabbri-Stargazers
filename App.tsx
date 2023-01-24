import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ColorsPalette from './src/constants/ColorsPalette';
import InnerApp from './src/screens/InnerApp';

function App(): JSX.Element {
    return (
        /* In that way, we can obtain different colors on Top and Bottom in SafeAreaView component */
        <>
            <SafeAreaView style={styles.container} />
            <SafeAreaView style={styles.container}>
                <InnerApp />
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorsPalette.LIGHT_BACKGROUND,
    },
});

export default App;
