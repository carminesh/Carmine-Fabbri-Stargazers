import { View } from 'react-native';
import React, { useMemo, useState } from 'react';
import SearchSection from '../../components/SearchSection/SearchSection';
import ListSection from '../../components/ListSection/ListSection';
import ExplanotarySection from '../../components/ExplanotarySection/ExplanotarySection';
import { searchStarredUsers } from '../../assets/svg/searchStarredUsers';
import { styles } from './InnerApp.style';

const InnerApp: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showEplainer, setShowEplainer] = useState<boolean>(true);

    /* This method allows the explanotary section to be rendered only the first time the user opens the app.
        When there are no result, the ListSection will show a different image */
    const renderMainSection = useMemo(() => {
        return showEplainer ? (
            <ExplanotarySection testID="explanotary-section" svgImage={searchStarredUsers()} textHeader={"Lets' have some Fun!"} textSubheader={'View the list of Stargazers in a repository'} />
        ) : (
            <ListSection testID="list-section" isLoading={isLoading} />
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
