import React from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
const Search = () => {
  return (
    <>
    <div className="hero">
      <div className="inptdiv">
        <input type="text"  placeholder='What are you looking for.?'className='search'/>
        <span><CameraAltIcon/></span>
      </div>
    </div>
    </>
  )
}

export default Search
