import styled from 'styled-components';
import { ButtonProps } from './Button.types';
import {
  Colors,
  FontSizes,
  FontWeights,
  LineHeights,
  Spacings,
} from '@/styles/tokens';
import { breakpoints } from '@/styles';

interface AnatomyProps {
  $variant: ButtonProps['variant'];
}

export const Anatomy = styled.button<AnatomyProps>`
  cursor: pointer;
  border-radius: 42px;
  display: flex;
  align-items: center;
  font-weight: ${FontWeights.Semibold};

  padding: ${Spacings.Small} ${Spacings.Normal};
  gap: ${Spacings.Tiny};
  font-size: ${FontSizes.BodySmall};
  line-height: ${LineHeights.Default};

  ${breakpoints.md} {
    padding: ${Spacings.ExtraSmall} ${Spacings.Normal};
    gap: ${Spacings.ExtraSmall};
    font-size: ${FontSizes.BodyLarge};
    line-height: ${LineHeights.Large};
  }

  color: ${({ $variant }) => variantsMapping[$variant].default.color};
  background-color: ${({ $variant }) =>
    variantsMapping[$variant].default.backgroundColor};
  border: 1px solid
    ${({ $variant }) => variantsMapping[$variant].default.borderColor};

  &:hover {
    color: ${({ $variant }) => variantsMapping[$variant].hover.color};
    background-color: ${({ $variant }) =>
      variantsMapping[$variant].hover.backgroundColor};
    border-color: ${({ $variant }) =>
      variantsMapping[$variant].hover.borderColor};

    svg * {
      fill: ${({ $variant }) => variantsMapping[$variant].hover.color};
    }
  }
`;

const variantsMapping = {
  primary: {
    default: {
      color: Colors.NeutralLightest,
      backgroundColor: Colors.SecondaryMedium,
      borderColor: Colors.NeutralLightest,
    },
    hover: {
      color: Colors.NeutralLightest,
      backgroundColor: Colors.SecondaryDark,
      borderColor: Colors.NeutralLightest,
    },
  },
  secondary: {
    default: {
      color: Colors.SecondaryMedium,
      backgroundColor: Colors.None,
      borderColor: Colors.SecondaryMedium,
    },
    hover: {
      color: Colors.SecondaryDark,
      backgroundColor: Colors.None,
      borderColor: Colors.SecondaryDark,
    },
  },
};
