import React, {useState} from 'react';
import {v4 as uuid} from 'uuid'
import MenuItem from '../menu-item';
import directoryData from './dirctoryData';
import {StyledDirectory} from './directory.styles';

export default function Directory() {
    const [state] = useState({
        sections: [...directoryData.sections]
    });
   const {sections} = state;
    return (
        <StyledDirectory>
            {
                sections.map(section => (
                    <MenuItem key={uuid()} {...section}/>
                ))
            }
        </StyledDirectory>
    )
}
