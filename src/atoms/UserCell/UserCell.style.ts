import ColorsPalette from "../../constants/ColorsPalette";
import { ScaledSize, StyleSheet } from 'react-native';

export const style = (dimensions: ScaledSize) =>
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
            width: 44,
            height: 44,
            borderRadius: 40,
        },
        textHeader: {
            fontSize: 16,
            color: ColorsPalette.BLUE_ACCENT,
            fontWeight: 'normal',
        },
    });
