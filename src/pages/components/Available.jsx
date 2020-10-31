import React, {useState} from "react";
import {
  PanelHeader,
  Group,
  Header,
  PullToRefresh,
  Avatar,
  PanelHeaderButton,
  Alert,
  View,
  Panel,
  ModalRoot,
  ModalPage,
  ModalPageHeader,
  IS_PLATFORM_ANDROID,
  IS_PLATFORM_IOS
} from "@vkontakte/vkui";
import {Icon24Cancel, Icon24Done} from '@vkontakte/icons';
import { OrdersNav } from "./OrdersNav";
import EmptyList from "./EmptyList";
import OrderCard from "../../components/OrderCard/OrderCard";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import DB from '../../db.json';

function Available({ items, activeLink, select, openModal }) {
    const [data, setData] = useState(DB);
    const [fetching, setFetching] = useState(false);
    const [openAlert, setOpenAlert] = useState(null);
    const [activeOrder, setActiveOrder] = useState({});
    const [openOrderInfo, setOpenOrderInfo] = useState(null);

    const onRefresh = () => {
        setFetching(true);
        setTimeout(() => {
            setFetching(false);
            setData(DB);
        }, 1000);
    }

    const closePopout = () => {
      setOpenAlert(null);
    }

    const openDefault = () => {
      setOpenAlert(
        <Alert
          actions={[{
            title: 'Окей',
            autoclose: true,
            mode: 'cancel'
          }]}
          onClose={() => closePopout()}
        >
          <h2>Профиль</h2>
          <p>Страницы "Профиль" пока нет, но скоро будет:)</p>
        </Alert>
      );
    }

    const modalBack = () => {
      setOpenOrderInfo(null);
    }

    const modal = (
      <ModalRoot activeModal={openOrderInfo} onClose={modalBack}>
        <ModalPage onClose={modalBack} id='orderInfo' header={
          <ModalPageHeader
            left={
              IS_PLATFORM_ANDROID && <PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>
            }
            right={
              <PanelHeaderButton onClick={modalBack}>{IS_PLATFORM_IOS ? 'Готово' : <Icon24Done />}</PanelHeaderButton>
            }>Заказ №{activeOrder.id}</ModalPageHeader>
        }>
          <OrderInfo item={activeOrder} />
        </ModalPage>
      </ModalRoot>
    );
  return (
    <React.Fragment>
      <View popout={openAlert} activePanel='alertBlock' modal={modal}>
        <Panel id="alertBlock">
          <PanelHeader left={<PanelHeaderButton onClick={() => openDefault()}>
            <Avatar size={36} shadow={false} style={{ backgroundColor: '#fff' }}>
              <svg width="36" height="36" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.99992 19.1667C4.93731 19.1667 0.833252 15.0626 0.833252 10C0.833252 4.9374 4.93731 0.833344 9.99992 0.833344C15.0625 0.833344 19.1666 4.9374 19.1666 10C19.1666 15.0626 15.0625 19.1667 9.99992 19.1667ZM16.1662 14.2706C17.0071 13.0586 17.4999 11.5869 17.4999 10C17.4999 5.85787 14.1421 2.50001 9.99992 2.50001C5.85778 2.50001 2.49992 5.85787 2.49992 10C2.49992 11.5869 2.99274 13.0586 3.83367 14.2706C4.77155 13.0317 6.97542 12.5 9.99992 12.5C13.0244 12.5 15.2283 13.0317 16.1662 14.2706ZM14.9705 15.6165C14.7266 14.7395 12.9744 14.1667 9.99992 14.1667C7.02544 14.1667 5.27326 14.7395 5.02935 15.6165C6.35267 16.7885 8.0932 17.5 9.99992 17.5C11.9066 17.5 13.6472 16.7885 14.9705 15.6165ZM9.99992 5.00001C7.9825 5.00001 6.66659 6.46314 6.66659 8.33334C6.66659 11.1895 8.13397 12.5 9.99992 12.5C11.8483 12.5 13.3333 11.233 13.3333 8.50001C13.3333 6.60133 12.0117 5.00001 9.99992 5.00001ZM8.33325 8.33334C8.33325 10.2244 9.01509 10.8333 9.99992 10.8333C10.9813 10.8333 11.6666 10.2487 11.6666 8.50001C11.6666 7.45869 11.013 6.66668 9.99992 6.66668C8.9447 6.66668 8.33325 7.34653 8.33325 8.33334Z" fill="#ff5c00" />
              </svg>
            </Avatar>
          </PanelHeaderButton>}>Доступные</PanelHeader>
          <PullToRefresh onRefresh={onRefresh} isFetching={fetching}>
            <OrdersNav activeLink={activeLink} select={select} items={items} />
            {
              data.orders.length === 0 ? <EmptyList text="Доступных заказов нет" /> : <div className="container">
              <Group header={<Header mode="secondary">Сегодня</Header>}>
                {data.orders.map((item, index) => (
                  <OrderCard
                    onClick={() => {
                      setActiveOrder(item);
                      setOpenOrderInfo('orderInfo');
                    }}
                    key={index}
                    data={item}
                  />
                ))}
              </Group>
            </div>
            }
            {/* <EmptyList text="Доступных заказов нет" /> */}
          </PullToRefresh>
        </Panel>
      </View>
    </React.Fragment>
  );
}

export default Available;
