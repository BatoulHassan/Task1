import Navbar from '../Navbar/Navbar';
import './Header.css';
import Hero from '../Hero/Hero';
import { useState } from 'react';

const Header = () => {

  const [title] = useState("The modern landing page for");
  const [secTitle] = useState("React Developer")
  const [heroPara] = useState("The easiest way to build react landing page in seconds.")
  const [heroBtn] = useState("Download your free version")

  return (
    <header>
        <Navbar gitBtn="GitHub" signBtn="Sign in" />
        <Hero title={title} secTitle={secTitle} heroPara={heroPara} heroBtn={heroBtn} />
    </header>
  )
}

export default Header