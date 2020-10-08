import React from 'react';
import {Arrow} from './arrow.styles'
import {AiOutlineArrowRight as Right, AiOutlineArrowLeft as Left} from 'react-icons/ai';

export default function Index({direction, handleClick}) {
    return (
        <Arrow
            onClick={handleClick}
            direction={direction}
        >
            {direction === 'right' ? <Right/> : <Left/>} 
        </Arrow>
    )
}
