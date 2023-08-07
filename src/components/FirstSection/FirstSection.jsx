import { useState } from 'react';
import Description from '../Description/Description';
import './FirstSectionStyle.css';
import firstpic from '../../assets/imgs/first.jpg';
import secondPic from '../../assets/imgs/second.jpg';
import thirdPic from '../../assets/imgs/third.jpg';

const FirstSection = () => {

    const [info] = useState([
          {
            descTitle: "Your title here",
            descPara: "Lorem ipsum dolor sit amet,consectetur adipisicing  elit. Sapiente aliquid deserunt nulla esse a culpa nam ratione ab? Reiciendis nisi quaerat <br/> quasi quia? Dolorum?",
            picture: firstpic,
            reverse: false
          },
          {
            descTitle: "Your title here",
            descPara: "Lorem ipsum dolor sit amet,consectetur adipisicing  elit. Sapiente aliquid deserunt nulla esse a culpa nam ratione ab? Reiciendis nisi quaerat <br/> quasi quia? Dolorum?",
            picture: secondPic,
            reverse: true
          },
          {
            descTitle: "Your title here",
            descPara: "Lorem ipsum dolor sit amet,consectetur adipisicing  elit. Sapiente aliquid deserunt nulla esse a culpa nam ratione ab? Reiciendis nisi quaerat <br/> quasi quia? Dolorum?",
            picture: thirdPic,
            reverse: false
          },
    ])

  return (
    <div className='firstSection'>
        <h1>Your title here</h1>
        <p className='main-para'>
            Lorem ipsum dolor sit amet,consectetur adipisicing elit. Eveniet animi. Vitae corporis,blanditiis<br/>
            laboriosam sunt adipisci nihil.
        </p>
        {
            info.map((item, index) => {
                return(
                    <Description key={index} descTitle={item.descTitle} descPara={item.descPara} picture={item.picture} reverse={item.reverse}/>
                )
            })
        }
    </div>
  )
}

export default FirstSection