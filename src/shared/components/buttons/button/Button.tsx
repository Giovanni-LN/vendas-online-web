import type { ButtonProps } from 'antd';

import { ButtonAntd } from './button.styles';

interface ButtonCurrentProps extends ButtonProps {
  margin?: string;
}

const Button = ({ margin, ...props }: ButtonCurrentProps) => {
  console.log('Botão renderizado', props);
  return <ButtonAntd style={{ margin }} {...props} />;
};

export default Button;
