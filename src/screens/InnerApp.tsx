import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ColorsPalette from '../constants/ColorsPalette';
import SearchSection from '../components/SearchSection';
import ListSection from '../components/ListSection';
import { Stargazer } from '../models/Stargazer';

const InnerApp: React.FC = () => {
    const [fetchedStargazers, setFetchedStargazers] = useState<Stargazer[]>();
    const [isLoading, setIsLoading] = useState(false);

    return (
        <View style={styles.viewContianer}>
            <SearchSection setFetchedStargazers={setFetchedStargazers} setIsLoading={setIsLoading} />
            <ListSection data={fetchedStargazers} isLoading={isLoading} />
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
