import Image from "next/image";
import Main from "./component/main";
import Hero from "./component/hero";
import Cost from "./component/costcom";
import Chose from "./component/choose";
import Why from "./component/why";
import Ourfeedback from "./component/ourfeedback";
import Contact from "./component/contact";

export default function Home() {
  return (
    <main>
      <Main />
      <Hero />
      <Cost />
      <Chose />
      <Why />
      <Ourfeedback />
      <Contact />
    </main>
  );
}
