import { StyleSheet, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import ColorsPalette from '../constants/ColorsPalette';
import SearchSection from '../components/SearchSection';
import ListSection from '../components/ListSection';
import { Stargazer } from '../models/Stargazer';
import ExplanotarySection from '../components/ExplanotarySection';

const InnerApp: React.FC = () => {
    const [fetchedStargazers, setFetchedStargazers] = useState<Stargazer[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showEplainer, setShowEplainer] = useState<boolean>(true);

    /* This method allows the explanotary section to be rendered only the first time the user opens the app.
        When there are no result, the ListSection will show a different image */
    const renderMainSection = useMemo(() => {
        return showEplainer ? <ExplanotarySection /> : <ListSection data={fetchedStargazers} isLoading={isLoading} />;
    }, [fetchedStargazers, isLoading, showEplainer]);

    return (
        <View style={styles.viewContianer}>
            <SearchSection setFetchedStargazers={setFetchedStargazers} setIsLoading={setIsLoading} setShowEplainer={setShowEplainer} />
            {renderMainSection}
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
