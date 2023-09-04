import React from 'react'
import './blog.css'
import Article from '../../components/Article/Article'
import {blog01, blog02, blog03, blog04, blog05} from './imports'

const Blog =()=>{
return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, we're bragging about it</h1>
      </div>

      <div className='gpt3__blog-container'>
        
        <div className='gpt3__blog-container_groupA'>
          <Article imgURL={blog01} date="Aug 25, 2023" text="GPT and Open  AI is the future. Let us exlore how." />
        </div>

        <div className='gpt3__blog-container_groupB'>
        <Article imgURL={blog02} date="Aug 25, 2023" text="GPT and Open  AI is the future. Let us exlore how." />
        <Article imgURL={blog03} date="Aug 25, 2023" text="GPT and Open  AI is the future. Let us exlore how." />
        <Article imgURL={blog04} date="Aug 25, 2023" text="GPT and Open  AI is the future. Let us exlore how." />
        <Article imgURL={blog05} date="Aug 25, 2023" text="GPT and Open  AI is the future. Let us exlore how." />

        </div>

      </div>
    </div>
)
}

export default Blog