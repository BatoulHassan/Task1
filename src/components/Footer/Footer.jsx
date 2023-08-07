import './FooterStyle.css';
import Logo from '../Logo/Logo';
import FooterList from '../FooterList/FooterList';
import Socials from '../Socials/Socials';
import RightsLine from '../RightsLine/RightsLine';
import { useState } from 'react';

const Footer = () => {

  const [developer] = useState("CreativeDesignsGuru")

  return (
    <footer>
      <Logo />
      <FooterList />
      <Socials />
      <RightsLine developer={developer}/>
    </footer>
  )
}

export default Footer