import React from 'react';

const EditButtonNoSvg = ({children, ...props}) => {
    return (
        <button {...props} className='btn btn-success'>
            {children}
        </button>
    );
};

export default EditButtonNoSvg;