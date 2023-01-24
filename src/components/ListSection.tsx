import { ActivityIndicator, ScaledSize, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React, { useCallback, useMemo } from 'react';
import ColorsPalette from '../constants/ColorsPalette';
import { SvgXml } from 'react-native-svg';
import { FlashList } from '@shopify/flash-list';
import { Stargazer } from '../models/Stargazer';
import UserCell from '../atoms/UserCell';
import { noResultIcon } from '../assets/svg/noResultIcon';

interface ListSectionProps {
    data: Stargazer[] | undefined;
    isLoading: boolean;
}

const ListSection: React.FC<ListSectionProps> = ({ data, isLoading }) => {
    const dimensions = useWindowDimensions();
    const styles = style(dimensions);

    const renderListSection = useMemo(() => {
        if (data && data.length > 0) {
            return <FlashList data={data} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => renderItem(item)} estimatedItemSize={300} numColumns={1} />;
        } else {
            return (
                <View style={styles.svgContainer}>
                    <SvgXml width={'45%'} height={'45%'} xml={noResultIcon()} />
                    <Text style={styles.textHeader}>No results found</Text>
                    <Text style={styles.textSubheader}>No one still liked this repository</Text>
                </View>
            );
        }
    }, [data]);

    const renderItem = useCallback(
        (item: Stargazer) => {
            return <UserCell login={item.login} id={item.id} avatar_url={item.avatar_url} />;
        },
        [data]
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
