import { ScaledSize, StyleSheet } from 'react-native';
import ColorsPalette from '../../constants/ColorsPalette';

export const style = (dimensions: ScaledSize) =>
    StyleSheet.create({
        buttonContainer: {
            width: dimensions.width - 32,
            height: 45,
            backgroundColor: ColorsPalette.BLUE_ACCENT,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            flexDirection: 'row',
        },
        buttonText: {
            color: ColorsPalette.WHITE,
            fontWeight: '600',
        },
        icon: {
            tintColor: ColorsPalette.WHITE,
            marginRight: 10,
            width: 15,
            height: 15,
        },
    });
