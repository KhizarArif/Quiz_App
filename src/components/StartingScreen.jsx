import React from 'react'
import styled from 'styled-components'

const StartingScreen = ({start}) => {
  return (
    <StartingContainer>
      <h1 className='Heading'> Join Quiz </h1>
      <p className='desc'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsam. </p>
      <button className='startBtn' onClick={start}> Start </button>
    </StartingContainer>
  )
}

export default StartingScreen


const StartingContainer = styled.div`
 width: 40%; 
 margin: auto;
 margin-top: 10rem;
 border: 1px solid #fff;
 background: #ffffff;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding: 5rem;
 box-shadow: 5px 5px 10px #494949;

 .Heading{
  padding: 0;
  margin: 0;
 }

 .desc{
  width: 50%;
  text-align: center;
  font-size: 1.2rem;
 }

 .startBtn{
  width: 30%;
  padding: 0.8rem 1.5rem;
  background: #000;
  color: #ffffff;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
 }

`