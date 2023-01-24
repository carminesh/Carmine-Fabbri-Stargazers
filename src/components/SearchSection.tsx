import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';
import ColorsPalette from '../constants/ColorsPalette';
import CustomTextInput from '../atoms/TextInput';
import SubmitButton from '../atoms/SubmitButton';
import { User, Stargazer } from '../models/Stargazer';
import { getStargazersList } from '../manager/SearchManager';

const SearchSection: React.FC = () => {
    const [user, setUser] = useState<string>('nandorojo');
    const [repo, setRepo] = useState<string>('moti');
    const [fetchedStargazers, setfetchedStargazers] = useState<User[]>();
    const [isLoading, setIsLoading] = useState(false);

    /* memoized value to manage the button 'disabled' property */
    const isButtonEnabled: boolean = useMemo(() => {
        return user.length > 0 && repo.length > 0 ? false : true;
    }, [user, repo]);

    const fetchStargazers = useCallback(async () => {
        setIsLoading(true);
        try {
            console.log('search: ', user, repo);
            let response = await getStargazersList(user, repo);

            /* In this section, we correctly map the endpoint response */
            if (response) {
                const mappedData: Stargazer[] = response.map((item: any) => ({
                    login: item.login,
                    id: item.id,
                    avatar_url: item.avatar_url,
                }));

                setfetchedStargazers(mappedData);
            }
        } catch (e: unknown) {
            console.error('Error: ', e);
        } finally {
            setIsLoading(false);
        }
    }, [user, repo]);

    return (
        <View style={styles.viewContianer}>
            <CustomTextInput placeholder={'Username'} textValue={user} onChangeText={setUser} />
            <CustomTextInput placeholder={'Repository'} textValue={repo} onChangeText={setRepo} />
            <SubmitButton isButtonEnabled={isButtonEnabled} onPressCallback={fetchStargazers} />
        </View>
    );
};

export default SearchSection;

const styles = StyleSheet.create({
    viewContianer: {
        paddingVertical: 16,
        width: '100%',
        height: 190,
        backgroundColor: ColorsPalette.LIGHT_BACKGROUND,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
