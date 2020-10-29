import React from 'react';
import OrdersNav from './components/OrdersNav';

import {
    Epic,
    Tabbar,
    TabbarItem,
    View,
    Panel,
    PanelHeader
} from '@vkontakte/vkui';
import './page.css';
import NewOrder from './NewOrder/NewOrder';

const links = [{name: "Активные", story: 'active'}, {name: "Завершенные", story: 'completed'}, {name: "Входящие", story: 'incoming'}];
const ordersLinks = [{name: "Доступные", story: 'available'}, {name: "Активные", story: 'active'}, {name: "Завершенные", story: 'completed'}];

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStory: "orders"
    };
    this.onStoryChange = this.onStoryChange.bind(this);
  }

  onStoryChange(e) {
    this.setState({ activeStory: e.currentTarget.dataset.story });
  }

  render() {

    return (
      <Epic
        activeStory={this.state.activeStory}
        tabbar={
          <Tabbar>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === "orders"}
              data-story="orders"
              text="Найти заказ"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929L18.2929 19.7071L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
                  fill={
                    this.state.activeStory === "orders" ? "#ff5c00" : "#bfbfbf"
                  }
                />
              </svg>
            </TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === "myOrders"}
              data-story="myOrders"
              text="Мои заказы"
            >
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.4966 1.66668C6.1235 1.13582 7.03261 0.833344 8 0.833344C8.96739 0.833344 9.8765 1.13582 10.5034 1.66668H11.3333C12.2538 1.66668 13 2.41287 13 3.33334L13.8333 3.33334C14.7538 3.33334 15.5 4.07954 15.5 5.00001V17.5C15.5 18.4205 14.7538 19.1667 13.8333 19.1667H2.16667C1.24619 19.1667 0.5 18.4205 0.5 17.5V5.00001C0.5 4.07954 1.24619 3.33334 2.16667 3.33334L3 3.33334C3 2.41287 3.74619 1.66668 4.66667 1.66668H5.4966ZM11.3333 5.83334C11.9502 5.83334 12.4889 5.49818 12.777 5.00001H13.8333V17.5H2.16667V5.00001H3.22297C3.51115 5.49818 4.04976 5.83334 4.66667 5.83334H11.3333ZM4.66667 13.3333V11.6667H9.66667V13.3333H4.66667ZM4.66667 8.33334V10H11.3333V8.33334H4.66667ZM6.21468 3.33334L6.46387 3.04616C6.73766 2.73063 7.32451 2.50001 8 2.50001C8.67549 2.50001 9.26234 2.73063 9.53613 3.04616L9.78532 3.33334H11.3333V4.16668H4.66667V3.33334H5.83446H6.21468Z"
                  fill={
                    this.state.activeStory === "myOrders"
                      ? "#ff5c00"
                      : "#bfbfbf"
                  }
                />
              </svg>
            </TabbarItem>
            <TabbarItem
              onClick={e => {
                this.onStoryChange(e);
              }}
              selected={this.state.activeStory === "newOrder"}
              data-story="newOrder"
              text="Новый заказ"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.99992 19.1667C4.93731 19.1667 0.833252 15.0626 0.833252 10C0.833252 4.9374 4.93731 0.833344 9.99992 0.833344C15.0625 0.833344 19.1666 4.9374 19.1666 10C19.1666 15.0626 15.0625 19.1667 9.99992 19.1667ZM9.99992 17.5C14.1421 17.5 17.4999 14.1421 17.4999 10C17.4999 5.85787 14.1421 2.50001 9.99992 2.50001C5.85778 2.50001 2.49992 5.85787 2.49992 10C2.49992 14.1421 5.85778 17.5 9.99992 17.5ZM14.1666 9.16668H10.8333V5.83334H9.16658V9.16668H5.83325V10.8333H9.16658V14.1667H10.8333V10.8333H14.1666V9.16668Z"
                  fill={
                    this.state.activeStory === "newOrder"
                      ? "#ff5c00"
                      : "#bfbfbf"
                  }
                />
              </svg>
            </TabbarItem>
          </Tabbar>
        }
      >
        <View id="orders" activePanel="orders">
          <Panel id="orders">
            <OrdersNav items={ordersLinks} />
          </Panel>
        </View>
        <View id="myOrders" activePanel="myOrders">
          <Panel id="myOrders">
            <OrdersNav items={links} />
          </Panel>
        </View>
        <View id="newOrder" activePanel="newOrder">
          <Panel id="newOrder">
            <PanelHeader>Новый заказ</PanelHeader>
            <NewOrder />
          </Panel>
        </View>
        <View id="profile" activePanel="profile">
          <Panel id="profile">
            <PanelHeader>Профиль</PanelHeader>
          </Panel>
        </View>
      </Epic>
    );
  }
}

export default Main;
