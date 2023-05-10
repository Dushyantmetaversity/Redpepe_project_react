import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainPage from './Components/MainPage';

function App() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"

    return () => {

    }
  }, [isOpen])

  return (
    <div className={"App" + (isOpen ? " overlay-open" : "")}>
      <Header isOpen={isOpen} setOpen={setOpen} />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
