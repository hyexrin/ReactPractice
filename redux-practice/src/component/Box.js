import React from 'react'
import { useSelector } from 'react-redux'
import GrandsonBox from './GrandsonBox';

const Box = () => {
    let count = useSelector(state => state.count);

  return (
    <div>
        Box {count}
        <GrandsonBox />
    </div>
  )
}

export default Box