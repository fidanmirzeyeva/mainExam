import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Sect4 from "../../components/Sect4/Sect4";
import Sect1 from "../../components/Sect1/Sect1";
import Sect2 from "../../components/Sect2/Sect2";
import Sect3 from "../../components/Sect3/Sect3";
import Sect5 from "../../components/Sect5/Sect5";

function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home Page</title>
        </Helmet>
      </HelmetProvider>

      <Sect1></Sect1>
      <Sect2></Sect2>
      <Sect3></Sect3>
      <Sect4></Sect4>
      {/* <Sect5></Sect5> */}
    </>
  );
}

export default Home;
