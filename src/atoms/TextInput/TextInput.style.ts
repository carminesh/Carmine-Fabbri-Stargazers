import { ScaledSize, StyleSheet } from 'react-native';
import ColorsPalette from '../../constants/ColorsPalette';

export const style = (dimensions: ScaledSize) =>
    StyleSheet.create({
        textInputContainer: {
            width: dimensions.width - 32,
            height: 45,
            backgroundColor: ColorsPalette.LIGHT_BACKGROUND,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: ColorsPalette.GRAY,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
        },
        icon: {
            tintColor: ColorsPalette.GRAY,
            marginRight: 10,
            width: 15,
            height: 15,
        },
        inputTextField: {
            width: '100%',
            height: '70%',
        },
    });
