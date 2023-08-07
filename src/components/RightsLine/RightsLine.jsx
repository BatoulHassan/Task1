import './RightsLineStyle.css';
import {PiCopyrightLight} from 'react-icons/pi';
import {AiFillHeart} from 'react-icons/ai';

const RightsLine = ({developer}) => {
  return (
    <div className='rightsLine'>
        <div className='lineContainer'>
            <p>
            <PiCopyrightLight className='rightsIcon'/>
            Copyright 2021 Nextjs Starter. Powered with
            <AiFillHeart className='rightsIcon'/>
            by &nbsp;
            </p>
            <span> {developer}</span>
        </div>
    </div>
  )
}

export default RightsLine
