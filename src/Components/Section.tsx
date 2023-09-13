import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

export default function Section({
  title = "My heading",
  children,
}: SectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      <h2>{children}</h2>
    </section>
  );
}
