import styled, { css } from 'styled-components';
import { FontSizes, FontWeights, LineHeights, Spacings } from '@/styles/tokens';
import { TypographyProps } from './Typography.types';
import { breakpoints } from '@/styles';

interface AnatomyProps {
  $variant: TypographyProps['variant'];
  $color: TypographyProps['color'];
}

export const Anatomy = styled.p<AnatomyProps>`
  margin: ${Spacings.None};
  color: ${({ $color }) => $color};

  font-weight: ${({ $variant }) => variantsMapping[$variant].fontWeight};
  line-height: ${({ $variant }) => variantsMapping[$variant].lineHeight};
  font-size: ${({ $variant }) => variantsMapping[$variant].mobile.fontSize};

  ${breakpoints.md} {
    font-size: ${({ $variant }) => variantsMapping[$variant].desktop.fontSize};
  }

  ${({ $variant }) =>
    variantsMapping[$variant].bold &&
    css`
      strong {
        font-weight: ${variantsMapping[$variant].bold};
      }
    `}
`;

interface VariantsMapping {
  [key: string]: {
    fontWeight: string;
    lineHeight: string;
    bold?: string;
    mobile: { fontSize: string };
    desktop: { fontSize: string };
  };
}

const variantsMapping: VariantsMapping = {
  ['heading-1']: {
    fontWeight: FontWeights.Bold,
    lineHeight: LineHeights.Default,
    mobile: {
      fontSize: FontSizes.Heading3,
    },
    desktop: {
      fontSize: FontSizes.Heading1,
    },
  },
  ['heading-2']: {
    fontWeight: FontWeights.Bold,
    lineHeight: LineHeights.Default,
    mobile: {
      fontSize: FontSizes.Heading3,
    },
    desktop: {
      fontSize: FontSizes.Heading2,
    },
  },
  ['heading-3']: {
    fontWeight: FontWeights.Bold,
    lineHeight: LineHeights.Default,
    mobile: {
      fontSize: FontSizes.Heading3,
    },
    desktop: {
      fontSize: FontSizes.Heading3,
    },
  },
  ['body-large']: {
    fontWeight: FontWeights.Regular,
    bold: FontWeights.Semibold,
    lineHeight: LineHeights.Large,
    mobile: {
      fontSize: FontSizes.BodySmall,
    },
    desktop: {
      fontSize: FontSizes.BodyLarge,
    },
  },
  ['body-small']: {
    fontWeight: FontWeights.Regular,
    lineHeight: LineHeights.Large,
    mobile: {
      fontSize: FontSizes.BodySmall,
    },
    desktop: {
      fontSize: FontSizes.BodySmall,
    },
  },
  caption: {
    fontWeight: FontWeights.Regular,
    lineHeight: LineHeights.Default,
    mobile: {
      fontSize: FontSizes.Caption,
    },
    desktop: {
      fontSize: FontSizes.Caption,
    },
  },
};
