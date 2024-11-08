import React from "react";
import HeaderButtons from "./HeaderButtons";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Modal from "./Modal";

const Table: React.FC = () => {
  return (
    <div className="tablemain">
      <header>
        <div className="header-left">
          <h1>Тестовое задание</h1>
          <h2>Frontend-разработчик: Рязанов Николай Александрович</h2>
        </div>
        <div className="header-right">
          <img src="../../../img1.svg" />
          <img src="../../../img2.svg" />
        </div>
      </header>
      <HeaderButtons />
      <table>
        <thead>
          <TableHead />
        </thead>
        <TableBody />
      </table>
      <Modal />
    </div>
  );
};

export default Table;
