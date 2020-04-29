import React from 'react';
import './homepage.styles.scss'
import { DirectoryMenu } from   '../directory-menu/directory-menu.component';

export const HomePage = () => {
  return (
    <div className='homepage'>
      <DirectoryMenu
      />
    </div>
    // <div className='homepage'>
    //   <div className='directory-menu'>
    //     <div className='menu-item'>
    //       <div className='content'>
    //         <h1 className='title'>HATS</h1>
    //         <span className='subtitle'>SHOP NOW</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}