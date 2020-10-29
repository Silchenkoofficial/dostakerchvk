import React, { useState } from 'react';
import classnames from 'classnames';
import { HorizontalScroll } from '@vkontakte/vkui';

function Weights() {
    const weights = [1, 5, 10, 15];
    const [weight, setWeight] = useState(0);

    return (
        <HorizontalScroll>
            <div className="weights">
                <ul className="weights__list">
                    {
                        weights.map((item, index) =>
                            <li
                                key={index}
                                onClick={() => setWeight(index)}
                                className={classnames('weights__list--link', {
                                    active: weight === index && 'active'
                                })}
                            >До {item} кг</li>
                        )
                    }
                </ul>
            </div>
        </HorizontalScroll>
    )
}

export default Weights
