import React from 'react';
import './menu-item.styles.scss'
import Content from '../content/content.component'

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size ? size+' ' : ''}menu-item`}>
      <div 
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})`}}
      />
      <Content
        title={title.toUpperCase()}
      />
    </div>
  )
}

export default MenuItem