import React from 'react';
import './content.styles.scss'

export const Content = (props) => {
  const name = props.name
  const subtitle = props.subtitle
  return (
    <div className='content'>
      <h1 className='title'> {name} </h1>
      <span className='subtitle'> {subtitle} </span>
    </div>
  )
}