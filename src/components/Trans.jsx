import React from 'react';

const Trans = ({trans}) => {
    return (
        <div>
            <div className='shadow shadow-md px-5 py-2 mt-4' key={trans.id}> {trans.amount}</div>
        </div>
    );
};

export default Trans;