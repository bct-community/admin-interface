import {
  SiDiscord,
  SiGithub,
  SiSolana,
  SiTelegram,
  SiX,
} from "@icons-pack/react-simple-icons";

const IconMap: Record<string, (size: number) => JSX.Element> = {
  SiGithub: (size) => <SiGithub size={size} />,
  SiDiscord: (size) => <SiDiscord size={size} />,
  SiX: (size) => <SiX size={size} />,
  SiTelegram: (size) => <SiTelegram size={size} />,
  SiSolana: (size) => <SiSolana size={size} />,
};

export default IconMap;
