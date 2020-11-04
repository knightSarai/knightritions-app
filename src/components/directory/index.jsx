import React from 'react';
/**Redux */
import  {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selecetDirectorySections} from '../../redux/directory/directory.selector'
/** Util */
import {v4 as uuid} from 'uuid';
/**Components */
import MenuItem from '../menu-item';
/**Styles */
import {StyledDirectory} from './directory.styles';

function Directory({sections}) {
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

const mapStateToProps = createStructuredSelector({
    sections: selecetDirectorySections
})

export default connect(mapStateToProps)(Directory);