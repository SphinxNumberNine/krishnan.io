import {faFacebook, faGithub, faInstagram, faLinkedin, faSpotify, faStackOverflow, faSteam, faXTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {IconDefinition} from '@fortawesome/free-regular-svg-icons';
import {faChessKnight, faEnvelope,faMobileScreenButton} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FC, memo} from 'react';

export interface IconProps extends React.HTMLAttributes<SVGSVGElement> {
  svgRef?: React.Ref<SVGSVGElement>;
  transform?: string;
}

export interface IconProperties {
  icon: IconDefinition
}

const Icon: FC<IconProperties> = memo(({icon}) => (
  <FontAwesomeIcon icon={icon} size="2xl"/>
));

export const GithubIcon: FC<IconProps> = memo(() => (
  <Icon icon={faGithub} />
));

export const InstagramIcon: FC<IconProps> = memo(() => (
  <Icon icon={faInstagram} />
));

export const StackOverflowIcon: FC<IconProps> = memo(() => (
  <Icon icon={faStackOverflow} />
));

export const TwitterIcon: FC<IconProps> = memo(() => (
  <Icon icon={faXTwitter} />
));

export const LinkedinIcon: FC<IconProps> = memo(() => (
  <Icon icon={faLinkedin} />
));

export const FacebookIcon: FC<IconProps> = memo(() => (
  <Icon icon={faFacebook} />
));

export const ChessIcon: FC<IconProps> = memo(() => (
  <Icon icon={faChessKnight} />
));

export const SteamIcon: FC<IconProps> = memo(() => (
  <Icon icon={faSteam} />
));

export const SpotifyIcon: FC<IconProps> = memo(() => (
  <Icon icon={faSpotify} />
));

export const YoutubeIcon: FC<IconProps> = memo(() => (
  <Icon icon={faYoutube} />
));

export const PhoneIcon: FC<IconProps> = memo(() => (
  <Icon icon={faMobileScreenButton} />
));

export const EmailIcon: FC<IconProps> = memo(() => (
  <Icon icon={faEnvelope} />
));

export default Icon;
