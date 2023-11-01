import Link from 'next/link';
import Image from 'next/image';
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
  return (
    <button type="button">
      <Link href={uri}>
        {type === 'github' ? (
          <GitHubSvg width={24} height={24} color={currentColor} />
        ) : type === 'linkedin' ? (
          <LinkedInSvg width={24} height={24} color={currentColor} />
        ) : null}
      </Link>
      {type === 'mail' && (
        <a href={`mailto:${uri}`}>
          <MailSvg width={24} height={24} color={currentColor} />
        </a>
      )}
    </button>
  );
}

export default SnsButtons;
