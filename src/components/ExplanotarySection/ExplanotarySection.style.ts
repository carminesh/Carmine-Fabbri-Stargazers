import { StyleSheet } from 'react-native';
import ColorsPalette from '../../constants/ColorsPalette';

export const styles = StyleSheet.create({
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
        paddingTop: 14,
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