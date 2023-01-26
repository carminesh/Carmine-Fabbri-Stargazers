import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import ExplanotarySection from '../src/atoms/ExplanotarySection/ExplanotarySection';
import renderer from 'react-test-renderer';

describe('ExplanotarySection testing', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<ExplanotarySection svgImage="<svg>...</svg>" textHeader="Test Header" textSubheader="Test Subheader" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should display the svg image passed as a prop', async () => {
        const svgImage = '<svg>...</svg>';
        const { queryByTestId } = render(<ExplanotarySection svgImage={svgImage} textHeader="Test Header" textSubheader="Test Subheader" />);

        const svg = queryByTestId('explanotary-section-svg');
        expect(svg).toBeTruthy();
    });

    it('should display the svg and the text header passed as a prop', async () => {
        const svgImage = '<svg>...</svg>';
        const { getByText } = render(<ExplanotarySection svgImage={svgImage} textHeader="Test Header" textSubheader="Test Subheader" />);

        const textHeader = getByText('Test Header');
        expect(textHeader).toBeTruthy();
    });

    it('should display the svg and the text subheader passed as a prop', async () => {
        const svgImage = '<svg>...</svg>';
        const { getByText } = render(<ExplanotarySection svgImage={svgImage} textHeader="Test Header" textSubheader="Test Subheader" />);

        const textSubheader = getByText('Test Subheader');
        expect(textSubheader).toBeTruthy();
    });
});
