import { Spinner } from './styles';

interface SpinnerProps {
  width?: any;
  height?: any;
  marginTop?: any;
  marginLeft?: any;
  color?: any;
}

export function Loader({
  width,
  height,
  marginTop,
  marginLeft,
  color,
}: SpinnerProps) {
  return (
    <Spinner
      width={width}
      height={height}
      marginTop={marginTop}
      color={color}
      marginLeft={marginLeft}
    />
  );
}
