import React from 'react'
import ListCard from './ListCard'
import styled from "styled-components"
const List = () => {
  return (
    <ListConatiner>
    <section className='featured background'>
    <div className='container'>
     <h1>Featured Property Types</h1> 
     <p>Find All Type of Property</p> 
      <ListCard/>
    </div>
  </section>
  </ListConatiner>

  )
}
const ListConatiner=styled.div`
.featured .box {
  box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
  border-radius: 6px;
  text-align: center;
  padding: 60px;
  cursor: pointer;
}
.featured img {
  width: 65px;
  height: 65px;
  margin: auto;
}
`
export default List