import './LogoStyle.css';
import {GiNetworkBars} from 'react-icons/gi';

const Logo = () => {
  return (
    <div className='logoContainer'>
             <GiNetworkBars className='network-icon'/>
             <p className='logoTitle'>Starter</p>
          </div>
  )
}

export default Logo