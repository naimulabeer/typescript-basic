import { ReactElement } from "react";

type HeadingProps = {
  title: string;
};
export default function Heading({ title }: HeadingProps): ReactElement {
  return <div>{title}</div>;
}
