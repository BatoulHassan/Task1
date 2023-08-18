import { useState } from 'react';
import Logo from '../Logo/Logo';
import  './NavbarStyle.css';


const Navbar = ({gitBtn, signBtn}) => {

  // change nav color when scrolling
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if(window.scrollY > 60) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
      <nav className={color ? 'navbar navbar-bg' : 'navbar'}>
        <div className="navContainer">
             <Logo />
             <div className='btnContainer'>
               <button>{gitBtn}</button>
               <button>{signBtn}</button>
             </div>
           </div>
    </nav>
  )
}

export default Navbar