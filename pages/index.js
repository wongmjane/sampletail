import a from "../styles/a.module.css";
import b from "../styles/b.module.css";
import c from "../styles/c.module.css";
import clsx from "clsx";

export default function Home() {
  return <div className={clsx(a.aa, b.bb, c.cc)}>Hello World!</div>;
}
