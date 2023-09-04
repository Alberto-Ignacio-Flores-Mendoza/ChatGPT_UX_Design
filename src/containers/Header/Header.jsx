import React from 'react'
import './Header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header =()=>{
return (
    <div className="gpt3__header section__padding" id="home">
      <div className='gpt3__header-content'>
        
        <h1 className='gradient__text'>Build Something Amazing With GPT OpenAI</h1>
        
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid soluta provident tempore quaerat sapiente recusandae aspernatur quae in ratione explicabo iure, molestiae obcaecati perferendis, ab error deleniti delectus omnis.</p>

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Email Address'/>
          <button type='button'>Get Started</button>
        </div>
        
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'></img>
          <p> 1600 people have visited in the last 24 hours</p>
        </div>

      


      </div>

      <div className='gpt3__header-image'>
          <img src={ai} alt='ai'></img>
          <a href="https://lovepik.com/images/png-artificial-intelligence-face.html">Artificial Intelligence Face Png vectors by Lovepik.com</a>
        </div>
    </div>
)
}

export default Header