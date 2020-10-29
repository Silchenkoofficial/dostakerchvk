import React from 'react';

function AddressBlock({num, address}) {
    return (
        <div className="address">
            <div className="address__header">
                <div className="num">{num}</div>
                <h1>{address}</h1>
            </div>
            <div className="address__info">
                <h1>Hello</h1>
            </div>
        </div>
    )
}

export default AddressBlock;
