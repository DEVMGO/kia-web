import React from 'react'
import Cover from './cover'
import Trust from './trust'
import style from '../../../styles/style.module.css'

const SectionOne = () => {
  return (
    <div className={style.sectionOne}>
        <Cover />
        <Trust />
    </div>
  )
}

export default SectionOne