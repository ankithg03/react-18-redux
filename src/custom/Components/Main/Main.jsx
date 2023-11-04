import React from 'react'
import { Counter } from '../../Redux/Components/Counter/Counter'
import style from './Main.css'

const Main = () => {
  return (
    <div className='container main-content'>
      <div className='title'>
        My App
      </div>
      <Counter />
    </div>
  )
}

export default Main