import './SocialsStyle.css';
import {AiOutlineGithub} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {FaLinkedin} from 'react-icons/fa';
import {LuAtSign} from 'react-icons/lu';
import {AiOutlineWifi} from 'react-icons/ai';

const Socials = () => {
  return (
    <ul className='socailsList'>
            <li>
                <a href="/#">
                    <AiOutlineGithub className='socialIcon'/>
                </a>
            </li>
            <li>
                <a href="/#">
                    <BsFacebook className='socialIcon'/>
                </a>
            </li>
            <li>
                <a href="/#">
                    <AiOutlineTwitter className='socialIcon'/>
                </a>
            </li>
            <li>
                <a href="/#">
                    <AiFillYoutube className='socialIcon'/>
                </a>
            </li>
            <li>
                <a href="/#">
                    <FaLinkedin className='socialIcon'/>
                </a>
            </li>
            <li>
                <a href="/#">
                    <LuAtSign className='socialIcon'/>
                </a>
            </li>
            <li>
                <a href="/#">
                    <AiOutlineWifi className='socialIcon'/>
                </a>
            </li>
        </ul>
  )
}

export default Socials