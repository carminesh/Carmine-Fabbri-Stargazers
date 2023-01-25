import { StyleSheet } from 'react-native';
import ColorsPalette from '../../constants/ColorsPalette';

export const styles = StyleSheet.create({
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
