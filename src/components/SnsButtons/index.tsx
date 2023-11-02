import Link from 'next/link';
import GitHubSvg from '@/assets/svg/github.svg';
import MailSvg from '@/assets/svg/mail.svg';
import LinkedInSvg from '@/assets/svg/linkedin.svg';

interface ISnsButtonProps {
  type: 'linkedin' | 'mail' | 'github';
  uri: string;
  theme?: 'light' | 'dark';
}

function SnsButtons({ type, uri, theme }: ISnsButtonProps) {
  const currentColor = theme === 'light' ? '#000' : '#fff';
  if (type === 'mail') {
    return (
      <a href={`mailto:${uri}`} aria-label={`Send mail to ${uri}`}>
        <MailSvg width={24} height={24} color={currentColor} />
      </a>
    );
  }

  return (
    <Link href={uri} passHref aria-label="sns button">
      {type === 'github' ? (
        <GitHubSvg width={24} height={24} color={currentColor} />
      ) : (
        <LinkedInSvg width={24} height={24} color={currentColor} />
      )}
    </Link>
  );
}

export default SnsButtons;
