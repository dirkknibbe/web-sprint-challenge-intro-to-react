//  Write your Character component here
import React from 'react'



const Character = props => {
    console.log(props)
    return (
      <>
        <div name='name'>{props.name}</div>
        <div birth_year='birth_year'>{props.birth_year}</div>
      </>
    )
  };

export default Character;