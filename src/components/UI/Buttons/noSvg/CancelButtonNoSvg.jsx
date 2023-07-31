import React from 'react';

const CancelButtonNoSvg = ({children, ...props}) => {
    return (
        <div {...props} className='btn btn-warning'>
            {children}
        </div>
    );
};

export default CancelButtonNoSvg;