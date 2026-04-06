import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Props = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

export default function CtaLink({ href, children, external }: Props) {
  const cls =
    'link-reveal font-serif text-[16px] md:text-[18px] text-ink tracking-[0.02em]';
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer">
        {children}
        <ArrowRight className="w-4 h-4" strokeWidth={1} aria-hidden="true" />
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      <ArrowRight className="w-4 h-4" strokeWidth={1} aria-hidden="true" />
    </Link>
  );
}