import React from 'react';
import Pimg from './pimg.styles';

export default function index({img, title}) {
    return (
        <Pimg img={img}>
            <div class="ptext">
                {title}
            </div>
        </Pimg>
    )
}
