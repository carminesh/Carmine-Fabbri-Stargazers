import { StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';
import { searchStarredUsers } from '../assets/svg/searchStarredUsers';
import ColorsPalette from '../constants/ColorsPalette';

const ExplanotarySection = () => {
    return (
        <View style={styles.svgContainer}>
            <SvgXml width={'45%'} height={'45%'} xml={searchStarredUsers()} />
            <Text style={styles.textHeader}>Lets' have some Fun!</Text>
            <Text style={styles.textSubheader}>View the list of Stargazers in a repository</Text>
        </View>
    );
};

export default memo(ExplanotarySection);

const styles = StyleSheet.create({
    svgContainer: {
        backgroundColor: ColorsPalette.WHITE90,
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 24,
    },
    textHeader: {
        paddingTop: 24,
        fontWeight: 'bold',
        fontSize: 26,
        color: ColorsPalette.BLACK_ACCENT,
    },
    textSubheader: {
        paddingTop: 6,
        fontSize: 16,
        fontWeight: '400',
    },
});
