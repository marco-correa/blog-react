import Arrow from '@/assets/arrow.svg';
import { Wrapper } from './SystemIcon.styles';

const iconsMapping = {
  arrow: <Arrow />,
};

type Type = 'arrow';

interface SystemIconProps {
  type: Type;
}

export const SystemIcon: React.FC<SystemIconProps> = ({ type }) => (
  <Wrapper>{iconsMapping[type]}</Wrapper>
);
