import { SiTodoist } from "react-icons/si";

interface Props {
  size: string;
}

const Logo: React.FC<Props> = ({ size }) => {
  return <SiTodoist size={size} />;
};

export default Logo;
