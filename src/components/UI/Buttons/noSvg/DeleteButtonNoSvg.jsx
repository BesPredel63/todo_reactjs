import React from 'react';

const DeleteButtonNoSvg = ({children, ...props}) => {
    return (
        <div {...props} className='btn btn-danger'>
            {children}
        </div>
    );
};

export default DeleteButtonNoSvg;