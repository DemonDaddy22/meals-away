'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  label: string;
};

const Navlink: React.FC<Props> = ({ href, label }) => {
  const path = usePathname();

  return (
    <Link
      className={`${path === href ? 'text-yellow-400' : 'text-white'} font-medium hover:text-yellow-300`}
      href={href}
    >
      {label}
    </Link>
  );
};

export default Navlink;
