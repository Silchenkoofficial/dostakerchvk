import React from 'react';
import './Card.css';

function OrderCard({data, onClick}) {
    return (
      <div className="card" onClick={onClick}>
        <div className="card__left">
          <div className="card__price">{data.price} ₽</div>
        </div>
        <div className="card__right">
          <div className="card__addressCount">
            Адресов: <span>{data.address.length}</span>
          </div>
          <div className="card__time">
            Приехать: с <span>{data.timeFromAddress1}</span> до <span>{data.timeToAddress1}</span>
          </div>
          <div className="card__address">
            <div className="card__address1">{data.address[0]}</div>
            {data.address.length > 2 && <span>...</span>}
            <div className="card__address2">
              {data.address[data.address.length - 1]}
            </div>
          </div>
          <div className="card__product">
            <div className="card__weight">
              До <span>{data.weight} кг.</span>
            </div>
            <div className="card__info">{data.product}</div>
          </div>
        </div>
      </div>
    );
}

export default OrderCard
