import { ScaledSize, StyleSheet } from 'react-native';
import ColorsPalette from '../../constants/ColorsPalette';

export const style = (dimensions: ScaledSize) =>
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