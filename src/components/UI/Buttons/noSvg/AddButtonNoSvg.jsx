import React from 'react';

const AddButtonNoSvg = ({children, ...props}) => {
    return (
        <button {...props} className='btn btn-primary'>
            {children}
        </button>
    );
};

export default AddButtonNoSvg;