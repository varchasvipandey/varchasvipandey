import Link from "next/link";

interface Props {
  label: JSX.Element;
  href: string;
}

export const LinkCta = ({ label, href }: Props) => {
  return (
    <Link
      href={href}
      className="border-2 border-primary/10 p-8 text-xl hover:text-secondary transition-all delay-75 flex flex-row items-center gap-2"
      target="_blank"
    >
      {label}
    </Link>
  );
};
