import { TopNavigation } from "./_components";

export default function PublicLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <TopNavigation />
      <main>{children}</main>
    </>
  );
}
