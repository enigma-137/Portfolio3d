import { BrowserRouter } from "react-router-dom";

import { About, About2, Contact, Hero, Navbar, Works, StarsCanvas } from "./components/components";
import Icons from "./Icons";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary
      '>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <StarsCanvas />
          <Hero />
  
        </div>
        <About />
      
        {/* <Experience /> */}
        <About2 />
        {/* <Tech /> */}
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Icons/>
      </div>
    </BrowserRouter>
  );
}

export default App;