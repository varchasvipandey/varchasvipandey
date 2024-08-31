import { ExternalLinkIcon, EnvelopeClosedIcon, LinkedInLogoIcon, ReaderIcon } from "@radix-ui/react-icons";

const icons = {
  externalLink: ExternalLinkIcon,
  email: EnvelopeClosedIcon,
  linkedIn: LinkedInLogoIcon,
  page: ReaderIcon,
};

type Icon = keyof typeof icons;

export const getIcon = (iconName: Icon) => icons[iconName];
