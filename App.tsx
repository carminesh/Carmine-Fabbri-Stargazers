import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ColorsPalette from './src/constants/ColorsPalette';
import InnerApp from './src/screens/InnerApp/InnerApp';
import { Provider } from 'react-redux';
import store from './src/store/store';

function App(): JSX.Element {
    return (
        <Provider store={store}>
            {/* In that way, we can obtain different colors on Top and Bottom in SafeAreaView component */}
            <SafeAreaView style={styles.container} />
            <SafeAreaView style={styles.container}>
                <InnerApp />
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorsPalette.LIGHT_BACKGROUND,
    },
});

export default App;
