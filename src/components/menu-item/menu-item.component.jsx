import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss'
import Content from '../content/content.component'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  console.log(match)
  return (
    <div
      className={`${size ? size+' ' : ''}menu-item`}
      onClick={() => {
        history.push(`${match.url}hats`) /// linkUrl
      }}
    >
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

export default withRouter(MenuItem)