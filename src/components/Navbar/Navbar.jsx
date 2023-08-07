import Logo from '../Logo/Logo';
import  './NavbarStyle.css';


const Navbar = ({gitBtn, signBtn}) => {
  return (
    <nav>
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