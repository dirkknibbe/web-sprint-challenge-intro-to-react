//  Write your Character component here
import React from 'react'
import styled, {keyframes} from 'styled-components';


const kf = keyframes`
 
  45% {
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`


const StyledDetails = styled.div`
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-size: 2.5rem;
padding-top: 20px;
display:flex;
justify-content: center;
justify-content: space-between;
padding-left: 15%;
padding-right: 15%;


transform: scale(0.8);
  opacity: 0; // start of animation
  animation: ${kf} 6.0s ease-in-out forwards;
  
`


const Character = props => {
    console.log(props)
    return (
      <StyledDetails>
        <div name='name'>{props.name}
          
        </div>
        <div birth_year='birth_year'>{props.birth_year}

        </div>
      </StyledDetails>
    )
  };

export default Character;