import { ActivityIndicator, ScaledSize, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React, { useCallback, useMemo } from 'react';
import ColorsPalette from '../constants/ColorsPalette';
import { SvgXml } from 'react-native-svg';
import { FlashList } from '@shopify/flash-list';
import { Stargazer } from '../models/Stargazer';
import UserCell from '../atoms/UserCell';
import { noResultIcon } from '../assets/svg/noResultIcon';
import ExplanotarySection from './ExplanotarySection';
import { noStargazersIcon } from '../assets/svg/noStargazersIcon';
import { useSelector } from 'react-redux';
import { getStargazers } from '../store/slices/StargazersSlice';

interface ListSectionProps {
    isLoading: boolean;
}

const ListSection: React.FC<ListSectionProps> = ({ isLoading }) => {
    const dimensions = useWindowDimensions();
    const styles = style(dimensions);
    const fetchedStargazers: Stargazer[] | undefined = useSelector(getStargazers);

    const renderListSection = useMemo(() => {
        // Check if data is undefined
        if (fetchedStargazers === undefined) {
            // If data is undefined, there was an error with the requested data so return the `ExplanotarySection` with error message
            return <ExplanotarySection svgImage={noResultIcon()} textHeader={'No results found'} textSubheader={'Enter the new data correctly and try again'} />;
        } else if (fetchedStargazers && fetchedStargazers.length > 0) {
            // If data is truthy and has a length greater than 0, return the `FlashList
            return <FlashList data={fetchedStargazers} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => renderItem(item)} estimatedItemSize={300} numColumns={1} />;
        } else {
            // If data is truthy but has a length of 0 this mean that no one starred the submitted repo
            return <ExplanotarySection svgImage={noStargazersIcon()} textHeader={'This repo is alone'} textSubheader={'No one still liked this repository'} />;
        }
    }, [fetchedStargazers]);

    const renderItem = useCallback(
        (item: Stargazer) => {
            return <UserCell login={item.login} id={item.id} avatar_url={item.avatar_url} />;
        },
        [fetchedStargazers]
    );

    return (
        <View style={[styles.containerView, isLoading && { justifyContent: 'center' }]}>{isLoading ? <ActivityIndicator size="small" color={ColorsPalette.BLUE_ACCENT} /> : renderListSection}</View>
    );
};

export default ListSection;

const style = (dimensions: ScaledSize) =>
    StyleSheet.create({
        containerView: {
            paddingVertical: 16,
            flex: 1,
            height: '100%',
            width: '100%',
            backgroundColor: ColorsPalette.WHITE90,
        },
        svgContainer: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 24,
        },
        textHeader: {
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
