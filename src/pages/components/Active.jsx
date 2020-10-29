import React from 'react';
import {
  PanelHeader
} from "@vkontakte/vkui";
import {OrdersNav} from './OrdersNav';
import EmptyList from './EmptyList';

function Active({items, activeLink, select, openModal}) {
    return (
      <React.Fragment>
        <PanelHeader>Активные</PanelHeader>
        <OrdersNav activeLink={activeLink} select={select} items={items} />
        <EmptyList text="У вас нет активных заказов" />
      </React.Fragment>
    );
}

export default Active;
