import { View } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';
import CustomTextInput from '../../atoms/CustomTextInput/CustomTextInput';
import SubmitButton from '../../atoms/SubmitButton/SubmitButton';
import { Stargazer } from '../../models/Stargazer';
import { getStargazersList } from '../../manager/SearchManager';
import { SEARCH_ICON, USER_ICON } from '../../assets/icons';
import { REPO_ICON } from '../../assets/icons/index';
import { useDispatch } from 'react-redux';
import { setStargazers } from '../../store/slices/StargazersSlice';
import { styles } from './SearchSection.style';

interface SearchSectionProps {
    setShowEplainer: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchSection: React.FC<SearchSectionProps> = ({ setShowEplainer, setIsLoading }) => {
    const [user, setUser] = useState<string>('');
    const [repo, setRepo] = useState<string>('');
    const dispatch = useDispatch();

    /* memoized value to manage the button 'disabled' property */
    const isButtonDisabled: boolean = useMemo(() => {
        return user.length > 0 && repo.length > 0 ? false : true;
    }, [user, repo]);

    const fetchStargazers = useCallback(async () => {
        setIsLoading(true);
        setShowEplainer(false);
        try {
            let response = await getStargazersList(user, repo);

            /* In this section, we correctly map the endpoint response */
            if (response) {
                const mappedData: Stargazer[] = response.map((item: Stargazer) => ({
                    login: item.login,
                    id: item.id,
                    avatar_url: item.avatar_url,
                }));
                dispatch(setStargazers(mappedData));
            } else {
                /* here we set undefined when the user or the repo does not exist */
                dispatch(setStargazers(response));
            }
        } catch (error: unknown) {
            console.error('Error: ', error);
        } finally {
            setIsLoading(false);
        }
    }, [user, repo]);

    return (
        <View style={styles.viewContianer}>
            <CustomTextInput testID="user-input" icon={USER_ICON} placeholder={'Search username'} textValue={user} onChangeText={setUser} />
            <CustomTextInput testID="repo-input" icon={REPO_ICON} placeholder={'Search repository'} textValue={repo} onChangeText={setRepo} />
            <SubmitButton testID="submit-button" icon={SEARCH_ICON} isButtonDisabled={isButtonDisabled} onPressCallback={fetchStargazers} />
        </View>
    );
};

export default SearchSection;
