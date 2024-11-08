import React from "react";
import Button from "../Ui/button/Button";
import { useTableContext } from "../context/TableContext";
import { RowData } from "../../types";

const HeaderButtons: React.FC = () => {
  const { columns, rows, setColumns, setRows, generateJSON } =
    useTableContext();

  const addRow = () => {
    const newRow: RowData = {};
    columns.forEach((col) => {
      newRow[col.id] = "";
    });
    setRows([...rows, newRow]);
  };

  const addColumn = () => {
    const newColumnId = `col${columns.length + 1}`;
    setColumns([...columns, { id: newColumnId, type: "string" }]);
    setRows(rows.map((row) => ({ ...row, [newColumnId]: "" })));
  };

  return (
    <div className="header-buttons">
      <Button onClick={addRow}>Добавить строку</Button>
      <Button onClick={addColumn}>Добавить столбец</Button>
      <Button onClick={generateJSON}>Сгенерировать JSON</Button>
    </div>
  );
};

export default HeaderButtons;
