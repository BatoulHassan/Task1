import './HeroStyle.css';

const Hero = ({title, secTitle, heroPara, heroBtn}) => {
  return (
    <div className='hero'>
        <h1 className='firstTitle'>{title}</h1>
        <h1 className='secondTitle'>{secTitle}</h1>
        <p>{heroPara}</p>
        <button>{heroBtn}</button>
    </div>
  )
}

export default Hero