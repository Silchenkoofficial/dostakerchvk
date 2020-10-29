import React, {useState} from 'react';
import classnames from 'classnames';

import {
  HorizontalScroll, View, Panel, Epic
} from "@vkontakte/vkui";
import Active from './Active';
import Available from './Available';
import Completed from './Completed';
import Incoming from './Incoming';

function Main({items}) {
    const [activeLink, setActiveLink] = useState(0);
    const [activeStory, setActiveStory] = useState(items[0].story);

    const onSelectedLink = (index, story) => {
        setActiveLink(index);
        setActiveStory(story);
    };

    return (
      <React.Fragment>
        <Epic activeStory={activeStory}>
          <View id="available" activePanel="available-panel">
            <Panel id="available-panel">
              <Available
                items={items}
                activeLink={activeLink}
                select={(index, story) => onSelectedLink(index, story)}
              />
            </Panel>
          </View>
          <View id="active" activePanel="active-panel">
            <Panel id="active-panel">
              <Active
                items={items}
                activeLink={activeLink}
                select={(index, story) => onSelectedLink(index, story)}
              />
            </Panel>
          </View>
          <View id="completed" activePanel="completed-panel">
            <Panel id="completed-panel">
              <Completed
                items={items}
                activeLink={activeLink}
                select={(index, story) => onSelectedLink(index, story)}
              />
            </Panel>
          </View>
          <View id="incoming" activePanel="incoming-panel">
            <Panel id="incoming-panel">
              <Incoming
                items={items}
                activeLink={activeLink}
                select={(index, story) => onSelectedLink(index, story)}
              />
            </Panel>
          </View>
        </Epic>
      </React.Fragment>
    );
}

export function OrdersNav({items, select, activeLink}) {
    return (
      <React.Fragment>
          <HorizontalScroll>
            <div style={{ backgroundColor: "#ffffff" }}>
              <ul className="orders__nav">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className={classnames("orders__nav--link", {
                      active: activeLink === index && "active"
                    })}
                    onClick={() => {
                      select(index, item.story);
                    }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </HorizontalScroll>
      </React.Fragment>
    );
}

export default Main;
