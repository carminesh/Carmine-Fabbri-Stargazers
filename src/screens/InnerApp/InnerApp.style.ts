import { StyleSheet } from 'react-native';
import ColorsPalette from '../../constants/ColorsPalette';

export const styles = StyleSheet.create({
    viewContianer: {
        width: '100%',
        height: '100%',
        backgroundColor: ColorsPalette.LIGHT_BACKGROUND,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});