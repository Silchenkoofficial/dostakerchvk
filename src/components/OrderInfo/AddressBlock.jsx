import { Cell, Group, Header } from '@vkontakte/vkui';
import React from 'react';

function AddressBlock({num, address, timeFrom, timeTo, telephone}) {
    return (
        <div className="address">
            <div className="address__header">
                <div className="num">{num}</div>
                <h1>Адрес</h1>
            </div>
            <div className="address__info">
                <div className="time">
                    <span className="label">Время</span>
                    <div className="time--text">
                        Сегодня с <span>{timeFrom}</span> до <span>{timeTo}</span>
                    </div>
                </div>
                <div className="address__to">
                    <span className="label">Куда</span>
                    <div className="address">
                        <p className="address--text">{address}</p>
                        <i className="address--icon">
                        <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9 22.3276L9.65773 21.7533C15.1887 16.9237 18 12.7068 18 9C18 3.75066 13.9029 0 9 0C4.09705 0 0 3.75066 0 9C0 12.7068 2.81131 16.9237 8.34227 21.7533L9 22.3276ZM9 19.6634C4.30661 15.4335 2 11.8492 2 9C2 4.8966 5.16411 2 9 2C12.8359 2 16 4.8966 16 9C16 11.8492 13.6934 15.4335 9 19.6634ZM9 4C11.7614 4 14 6.23858 14 9C14 11.7614 11.7614 14 9 14C6.23858 14 4 11.7614 4 9C4 6.23858 6.23858 4 9 4ZM6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9C12 10.6569 10.6569 12 9 12C7.34315 12 6 10.6569 6 9Z" fill="#ff5c00"/>
                        </svg>
                        </i>
                    </div>
                </div>
                <div className="telephone">
                    <span className="label">Телефон</span>
                    <a href={`tel:${telephone}`} className="telephone--text">
                        {telephone}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AddressBlock;