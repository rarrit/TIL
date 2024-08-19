import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>HOME !</h1>
      <button
        onClick={() => {
          navigate("/works");
        }}
      >WORKS로 이동</button>
    </div>
  )
}

export default Home
