import React from 'react';
import './blog.css';
import {Article} from '../../components ';
import {blog01, blog02, blog03, blog04, blog05 } from'./imports';
const Blog = () => {
  return (
    <div className='gpt4__blog section__padding' id='blog'>
        <div className='gpt4__blog-heading'>
          <h1 className='gradient__text'>A lot is happening, We're blogging about it.</h1>
        </div>
        <div className='gpt4__blog-container'>
          <div className='gpt4__blog-container_groupA'>
          <Article imgUrl={blog01} date='May 15, 2024' title="GPT4 and Open AI is the future. Let's explore"/>
          </div>
          <div className='gpt4__blog-container_groupB'>
          <Article imgUrl={blog02} date='May 15, 2024' title="GPT4 and Open AI is the future. Let's explore"/>
          <Article imgUrl={blog03} date='May 15, 2024' title="GPT4 and Open AI is the future. Let's explore"/>
          <Article imgUrl={blog04} date='May 15, 2024' title="GPT4 and Open AI is the future. Let's explore"/>
          <Article imgUrl={blog05} date='May 15, 2024' title="GPT4 and Open AI is the future. Let's explore"/>
          </div>
        </div>
    </div>
  )
}

export default Blog