import Link from 'next/link';

export function Footer() {
  return (
    <p className="footer">
      Created by{' '}
      <Link href="https://www.linkedin.com/in/artur-peres-ceschin-programador/">
        Artur Ceschin
      </Link>{' '}
      - devChallenges.io
    </p>
  );
}
