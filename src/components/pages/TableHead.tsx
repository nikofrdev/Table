import React from "react";
import { useTableContext } from "../context/TableContext";
import { ColumnType } from "../../types";
import Button from "../Ui/button/Button";
import Select from "../Ui/select/Select";

const TableHead: React.FC = () => {
  const { columns, rows, setColumns, setRows } = useTableContext();

  const handleColumnTypeChange = (columnId: string, type: ColumnType) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) => (col.id === columnId ? { ...col, type } : col))
    );
  };

  const removeColumn = (colIndex: number) => {
    const columnToRemove = columns[colIndex].id;
    setColumns(columns.filter((_, index) => index !== colIndex));
    setRows(rows.map(({ [columnToRemove]: _, ...rest }) => rest));
  };

  return (
    <tr>
      {columns.length > 0 ? (
        columns.map((col, colIndex) => (
          <th key={colIndex}>
            <div>
              <Select
                col={col}
                handleColumnTypeChange={handleColumnTypeChange}
                options={[
                  { value: "string", name: "Строка" },
                  { value: "percentage", name: "Процент" },
                ]}
              />
              <Button
                onClick={() => removeColumn(colIndex)}
                className="remove-button"
              >
                Удалить столбец
              </Button>
            </div>
            <div>Столбец</div>
          </th>
        ))
      ) : (
        <th>Нет столбцов</th>
      )}
    </tr>
  );
};

export default TableHead;
