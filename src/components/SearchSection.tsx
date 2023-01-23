import { StyleSheet, Text, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import ColorsPalette from '../constants/ColorsPalette';
import CustomTextInput from '../atoms/TextInput';
import SubmitButton from '../atoms/SubmitButton';

const SearchSection: React.FC = () => {
    const [user, setUser] = useState<string>('');
    const [repo, setRepo] = useState<string>('');

    /* memoized value to manage the button 'disabled' property */
    const isButtonEnabled: boolean = useMemo(() => {
        return user.length > 0 && repo.length > 0 ? false : true;
    }, [user, repo]);

    return (
        <View style={styles.viewContianer}>
            <CustomTextInput placeholder={'Username'} textValue={user} onChangeText={setUser} />
            <CustomTextInput placeholder={'Repository'} textValue={repo} onChangeText={setRepo} />
            <SubmitButton isButtonEnabled={isButtonEnabled} />
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
