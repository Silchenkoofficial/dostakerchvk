import React, {useState} from 'react';
import classnames from 'classnames';
import { HorizontalScroll } from '@vkontakte/vkui';

function HeaderNav() {
    const types = [
        {
            type: "Пешком",
            weights: [1, 5, 10, 15],
            id: 0
        },
        {
            type: "На машине",
            weights: [50, 100, 150, 200],
            id: 1
        }
    ];

    const [activeType, SetActiveType] = useState(types[0]);
    const [weight, setWeight] = useState(0);

    return (
        <React.Fragment>
            <div className="header-nav">
                <HorizontalScroll>
                    <div className="types">
                        <ul className="types__list">
                            {
                                types.map((type, index) =>
                                    <li
                                        key={index}
                                        onClick={() => SetActiveType(type)}
                                        className={classnames('types__list--link', {
                                            active: activeType.id === index && 'active'
                                        })}
                                    >{type.type}</li>
                                )
                            }
                        </ul>
                    </div>
                </HorizontalScroll>
                <HorizontalScroll>
                    <div className="weights">
                        <ul className="weights__list">
                            {
                                activeType.weights.map((item, index) =>
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
            </div>
        </React.Fragment>
    )
}

export default HeaderNav;
