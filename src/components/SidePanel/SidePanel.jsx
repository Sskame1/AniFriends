import React from 'react'
import { Link } from 'react-router-dom'

import style from './SidePanel.module.scss'

function SidePanel() {
  return (
    <div className={style.container}>
        <Link to='/' className={style.logo}>AniFriends</Link>
        <div>
            
        </div>
    </div>
  )
}

export default SidePanel