import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PageRouter from "./PageRouter";


const App = () => {
  useEffect(() => {
    Aos.init();
    return () => Aos.refresh();
  }, []);

  return (
    <>
  
      <PageRouter />

    </>
  );
};

export default App;
