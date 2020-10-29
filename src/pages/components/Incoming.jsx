import React from "react";
import { PanelHeader } from "@vkontakte/vkui";
import { OrdersNav } from "./OrdersNav";

function Incoming({ items, activeLink, select }) {
  return (
    <React.Fragment>
      <PanelHeader>Входящие</PanelHeader>
      <OrdersNav activeLink={activeLink} select={select} items={items} />
    </React.Fragment>
  );
}

export default Incoming;
