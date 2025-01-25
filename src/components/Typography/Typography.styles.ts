import styled from 'styled-components';
import { FontSizes, FontWeights, LineHeights, Spacings } from '@/styles/tokens';
import { TypographyProps } from './Typography.types';

interface AnatomyProps {
  $variant: TypographyProps['variant'];
  $color: TypographyProps['color'];
}

export const Anatomy = styled.p<AnatomyProps>`
  margin: ${Spacings.None};

  color: ${({ $color }) => $color};

  font-size: ${({ $variant }) => variantsMapping[$variant].fontSize};
  line-height: ${({ $variant }) => variantsMapping[$variant].lineHeight};
  font-weight: ${({ $variant }) => variantsMapping[$variant].fontWeight};
`;

const variantsMapping = {
  heading1: {
    fontSize: FontSizes.Heading1,
    lineHeight: LineHeights.Default,
    fontWeight: FontWeights.Bold,
  },
  heading2: {
    fontSize: FontSizes.Heading2,
    lineHeight: LineHeights.Default,
    fontWeight: FontWeights.Bold,
  },
  heading3: {
    fontSize: FontSizes.Heading3,
    lineHeight: LineHeights.Default,
    fontWeight: FontWeights.Bold,
  },
  bodyLarge: {
    fontSize: FontSizes.BodyLarge,
    lineHeight: LineHeights.Large,
    fontWeight: FontWeights.Regular,
  },
  bodyLargeBold: {
    fontSize: FontSizes.BodyLarge,
    lineHeight: LineHeights.Large,
    fontWeight: FontWeights.Semibold,
  },
  bodySmall: {
    fontSize: FontSizes.BodySmall,
    lineHeight: LineHeights.Large,
    fontWeight: FontWeights.Regular,
  },
  caption: {
    fontSize: FontSizes.Caption,
    lineHeight: LineHeights.Default,
    fontWeight: FontWeights.Regular,
  },
};
