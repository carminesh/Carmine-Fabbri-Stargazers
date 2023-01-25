import { StyleSheet, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import ColorsPalette from '../constants/ColorsPalette';
import SearchSection from '../components/SearchSection';
import ListSection from '../components/ListSection';
import { Stargazer } from '../models/Stargazer';
import ExplanotarySection from '../components/ExplanotarySection';
import { searchStarredUsers } from '../assets/svg/searchStarredUsers';

const InnerApp: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showEplainer, setShowEplainer] = useState<boolean>(true);

    /* This method allows the explanotary section to be rendered only the first time the user opens the app.
        When there are no result, the ListSection will show a different image */
    const renderMainSection = useMemo(() => {
        return showEplainer ? (
            <ExplanotarySection svgImage={searchStarredUsers()} textHeader={"Lets' have some Fun!"} textSubheader={'View the list of Stargazers in a repository'} />
        ) : (
            <ListSection isLoading={isLoading} />
        );
    }, [isLoading, showEplainer]);

    return (
        <View style={styles.viewContianer}>
            <SearchSection setIsLoading={setIsLoading} setShowEplainer={setShowEplainer} />
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
