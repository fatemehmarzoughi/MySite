import { Header } from './components/header'
import { SlideShow } from './components/slideShow'
import { Carts } from './components/carts';
import { Portfolio } from './components/portfolio';
import { About } from './components/about';
import {IoIosArrowUp} from 'react-icons/io';
import { Contact } from './components/contact';
import { Footer } from './components/footer'

function App() {
  return (
    <div className="">

      <div className="bringToTop">
        <IoIosArrowUp size={22} color={'#fff'} />
      </div>

      <Header />

      <SlideShow />

      <Carts />

      <Portfolio />

      <About />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;
