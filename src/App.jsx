import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PageRouter from "./PageRouter";
// In your index.js or App.js
import '@fortawesome/fontawesome-free/css/all.min.css';


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
