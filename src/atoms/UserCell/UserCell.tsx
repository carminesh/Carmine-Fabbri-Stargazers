import { Text, View, useWindowDimensions, Image } from 'react-native';
import React, { memo } from 'react';
import { style } from './UserCell.style';

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
            <Image testID="user-cell-avatar" source={{ uri: avatar_url }} style={styles.avatar} resizeMode={'contain'} />
            <View style={styles.infosContainer}>
                <Text>
                    Username: <Text style={styles.textHeader}>{login}</Text>
                </Text>
            </View>
        </View>
    );
};

export default memo(UserCell);
