import React from 'react';
import {Spinner, SpinnerOverlay} from './spinner.styles';

const WithSpinner = Component => ({isLoading, ...otherProps}) => {
    return isLoading ?
        (<SpinnerOverlay>
            <Spinner/>
        </SpinnerOverlay>
        ): (
            <Component {...otherProps}/>
        )  
};

export default WithSpinner;