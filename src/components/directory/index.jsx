import React from 'react';
import MenuItem from '../menu-item'
import {StyledDirectory} from './directory.styles';

export default function directory({children}) {
    return (
        <StyledDirectory>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
        </StyledDirectory>
    )
}
