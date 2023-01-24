import { StyleSheet, Text, View, useWindowDimensions, ScaledSize, Image } from 'react-native';
import React, { memo } from 'react';
import ColorsPalette from '../constants/ColorsPalette';

interface UserCellProps {
    login: string;
    id: number;
    avatar_url: string;
}

const UserCell: React.FC<UserCellProps> = ({ login, id, avatar_url }) => {
    const dimensions = useWindowDimensions();
    const styles = style(dimensions);

    return (
        <View style={styles.cellContainer}>
            <Image source={{ uri: avatar_url }} style={styles.avatar} />
            <View style={styles.infosContainer}>
                <Text style={styles.textHeader}>{login}</Text>
                <Text>{login}</Text>
            </View>
        </View>
    );
};

export default memo(UserCell);

const style = (dimensions: ScaledSize) =>
    StyleSheet.create({
        cellContainer: {
            alignSelf: 'center',
            width: dimensions.width - 32,
            height: 76,
            borderRadius: 5,
            backgroundColor: ColorsPalette.WHITE,
            marginBottom: 10,
            paddingHorizontal: 18,
            paddingVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
        },
        infosContainer: {
            alignItems: 'center',
            paddingVertical: 10,
            paddingHorizontal: 14,
        },
        avatar: {
            width: 40,
            height: 40,
            borderRadius: 40,
        },
        textHeader: {
            fontSize: 16,
            color: ColorsPalette.BLUE_ACCENT,
            fontWeight: 'normal',
        },
    });
