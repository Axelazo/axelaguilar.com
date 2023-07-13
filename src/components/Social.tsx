import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface SocialProps {
  url: string;
  icon: IconType;
}

export default function Social({ url, icon }: SocialProps) {
  return (
    <a href={url} target={"_blank"} rel={"noreferrer"}>
      <Icon boxSize={10} p={2} as={icon} borderRadius={"100%"}></Icon>
    </a>
  );
}
