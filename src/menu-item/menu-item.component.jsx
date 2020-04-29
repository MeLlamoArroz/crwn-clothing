import React from 'react';
import './menu-item.styles.scss'
import { Content } from '../content/content.component'

export const MenuItem = () => {
  return (
    <div className='menu-item'>
      <Content
        name='HATS'
        subtitle='SHOP NOW'
      />
      <Content
        name='JACKETS'
        subtitle='SHOP NOW'
      />
      <Content
        name='SNEAKERS'
        subtitle='SHOP NOW'
      />
      <Content
        name='WOMENS'
        subtitle='SHOP NOW'
      />
      <Content
        name='MENS'
        subtitle='SHOP NOW'
      />
    </div>
  )
}