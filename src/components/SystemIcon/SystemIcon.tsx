import Arrow from '@/assets/arrow.svg';
import Tune from '@/assets/tune.svg';

import { Wrapper } from './SystemIcon.styles';

const iconsMapping = {
  arrow: <Arrow />,
  tune: <Tune />,
};

type Type = 'arrow' | 'tune';

interface SystemIconProps {
  type: Type;
}

export const SystemIcon: React.FC<SystemIconProps> = ({ type }) => (
  <Wrapper>{iconsMapping[type]}</Wrapper>
);
