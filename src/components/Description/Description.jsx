import './DescriptionStyle.css';

const Description = ({descTitle, descPara, picture, reverse}) => {
  return (
    <div className={(reverse) ? 'descContainer reverse' : 'descContainer'}>
        <div className='descBox'>
          <h2>{descTitle}</h2>
          <p>{descPara}</p>
        </div>
        <div className='imgContainer'>
           <img src={picture} alt="firstImg" />
         </div>
    </div>
  )
}

export default Description
