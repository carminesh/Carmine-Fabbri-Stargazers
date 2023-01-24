import { ScaledSize, StyleSheet, useWindowDimensions, View } from 'react-native';
import React, { useCallback } from 'react';
import ColorsPalette from '../constants/ColorsPalette';
import { FlashList } from '@shopify/flash-list';
import { Stargazer } from '../models/Stargazer';
import UserCell from '../atoms/UserCell';

interface ListSectionProps {
    data: Stargazer[] | undefined;
    isLoading: boolean;
}

const ListSection: React.FC<ListSectionProps> = ({ data, isLoading }) => {
    const dimensions = useWindowDimensions();
    const styles = style(dimensions);

    const renderItem = useCallback(
        (item: Stargazer) => {
            return <UserCell login={item.login} id={item.id} avatar_url={item.avatar_url} />;
        },
        [data]
    );

    return (
        <View style={styles.containerView}>
            <FlashList data={data} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => renderItem(item)} estimatedItemSize={300} numColumns={1} />
        </View>
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
    });
