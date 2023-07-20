import Link from 'next/link';
import Image from 'next/image';

function SnsButtons({ type, uri }: { type: 'linkedin' | 'mail' | 'github'; uri: string }) {
  return (
    <button type="button">
      <Link href={uri}>
        {type === 'github' ? (
          <Image src="/svgs/github.svg" width={24} height={24} alt="github" />
        ) : type === 'mail' ? (
          <Image src="/svgs/mail.svg" width={24} height={24} alt="github" />
        ) : type === 'linkedin' ? (
          <Image src="/svgs/linkedin.svg" width={24} height={24} alt="github" />
        ) : null}
      </Link>
    </button>
  );
}

export default SnsButtons;
