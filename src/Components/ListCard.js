import React from 'react'
import projImg1 from "../Assets/h1.png"
import projImg2 from "../Assets/h2.png"
import projImg3 from "../Assets/h3.png"
import projImg4 from "../Assets/h4.png"
import styled from 'styled-components'


const ListCard = () => {
    const featured = [
        {
            imgUrl: projImg1,
          name: "Family House",
          total: "122 Property",
        },
        {
            imgUrl: projImg2,
          name: "House & Villa",
          total: "155 Property",
        },
        {
            imgUrl: projImg3,
          name: "Apartment",
          total: "300 Property",
        },
        {
            imgUrl: projImg4,
          name: "Office & Studio",
          total: "80 Property",
        },
        
      ]

  return (
    <CardContainer>
    <div className='content grid mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.imgUrl} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
      </CardContainer>
  )
}
const CardContainer=styled.div`
.grid{
    display: flex;
}
`
export default ListCard