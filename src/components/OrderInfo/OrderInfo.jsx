import React from 'react';
import './OrderInfo.css';
import AddressBlock from './AddressBlock';

function OrderInfo({item}) {
    console.log(item);
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
                        <div className="detail-block">
                            <span className="label">Детали заказа</span>
                            <span className="product">{item.product}</span>
                            <span className="weight">До {item.weight} кг.</span>
                        </div>
                    </div>
                    {
                        item.address.map((address, index) => {
                            return (
                                <div className="wrapper">
                                    <AddressBlock
                                        key={`address_${index}`}
                                        num={index+1}
                                        address={address.text}
                                        timeFrom={address.timeFrom}
                                        timeTo={address.timeTo}
                                        telephone={address.telephone} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default OrderInfo;