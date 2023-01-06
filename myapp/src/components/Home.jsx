import React from 'react'
import '../components/styles.css'
import Search from '../Assets/search.png'

const Home = () => {
  return (
    <>
    <div className='d-grid'>
            <div className='d-flex justify-content-end'>
                <div className='search-box d-flex'>
                    <img style={{height:"20px",width:'20px',margin:"auto"}} 
                         src={Search} alt="search-icon">
                    </img>
                    <input style={{border:"none"}} placeholder='Search a Term | Topic'></input>
                </div>
            </div>
            <div clas>
                <p style={{color:"#6C00FF"}}>Claim a Free Quote</p>
            </div>

        </div>

    </>
  )
}

export default Home
