import React from "react";
import { PanelHeader } from "@vkontakte/vkui";
import { OrdersNav } from "./OrdersNav";
import EmptyList from "./EmptyList";

function Completed({ items, activeLink, select }) {
  return (
    <React.Fragment>
      <PanelHeader>Завершенные</PanelHeader>
      <OrdersNav activeLink={activeLink} select={select} items={items} />
      <EmptyList text="У вас пока нет завершенных заказов" />
    </React.Fragment>
  );
}

export default Completed;
