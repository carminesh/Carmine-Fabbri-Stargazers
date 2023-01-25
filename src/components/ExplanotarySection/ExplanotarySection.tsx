import { Text, View } from 'react-native';
import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';
import { styles } from './ExplanotarySection.style';

interface ExplanotarySectionProps {
    svgImage: string;
    textHeader: string;
    textSubheader: string;
}

const ExplanotarySection: React.FC<ExplanotarySectionProps> = ({ svgImage, textHeader, textSubheader }) => {
    return (
        <View style={styles.svgContainer}>
            <SvgXml width={'45%'} height={'45%'} xml={svgImage} />
            <Text style={styles.textHeader}>{textHeader}</Text>
            <Text style={styles.textSubheader}>{textSubheader}</Text>
        </View>
    );
};

export default memo(ExplanotarySection);


