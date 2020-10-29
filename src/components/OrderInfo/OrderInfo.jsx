import React from 'react';
import './OrderInfo.css';
import AddressBlock from './AddressBlock';

function OrderInfo({item}) {
    return (
        <React.Fragment>
            <div className="order-info">
                <div className="container">
                    <div className="wrapper">
                        <div className="order-info__disclaimer">
                            Внимательно прочитайте условия, перед тем как брать заказ
                        </div>
                        <div className="order-info__button">Взять заказ</div>
                    </div>
                    <div className="wrapper">
                        {
                            item.address.map((address, index) => 
                                <AddressBlock
                                    key={`address_${index}`}
                                    num={index+1} address={address} />
                            )
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OrderInfo;