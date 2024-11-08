import React, { useState } from "react";
import { useTableContext } from "../context/TableContext";
import Input from "../Ui/input/Input";
import Button from "../Ui/button/Button";

const TableBody: React.FC = () => {
  const { columns, rows, setRows } = useTableContext();
  const [editingCell, setEditingCell] = useState<{
    row: number;
    col: string;
  } | null>(null);

  const removeRow = (rowIndex: number) => {
    setRows(rows.filter((_, index) => index !== rowIndex));
  };

  const handleCellClick = (rowIndex: number, col: string) => {
    setEditingCell({ row: rowIndex, col });
  };

  const handleInputChange = (value: string, rowIndex: number, col: string) => {
    setRows((prevRows) =>
      prevRows.map((row, index) =>
        index === rowIndex ? { ...row, [col]: value } : row
      )
    );
  };

  const handleBlur = () => {
    setEditingCell(null);
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
    rowIndex: number,
    col: string
  ) => {
    if (event.key === "Enter") {
      setEditingCell(null);
    }
  };
  return (
    <tbody>
      {rows.length > 0 ? (
        rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => (
              <td
                key={col.id}
                onClick={() => handleCellClick(rowIndex, col.id)}
              >
                {editingCell?.row === rowIndex &&
                editingCell?.col === col.id ? (
                  col.type === "percentage" ? (
                    <Input
                      type="number"
                      placeholder="Данные"
                      value={row[col.id]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputChange(e.target.value, rowIndex, col.id)
                      }
                      onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
                        handleKeyPress(e, rowIndex, col.id)
                      }
                      onBlur={handleBlur}
                      autoFocus
                    />
                  ) : (
                    <Input
                      type="text"
                      placeholder="Данные"
                      value={row[col.id]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputChange(e.target.value, rowIndex, col.id)
                      }
                      onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
                        handleKeyPress(e, rowIndex, col.id)
                      }
                      onBlur={handleBlur}
                      autoFocus
                    />
                  )
                ) : (
                  row[col.id] || <span className="placeholder">Данные</span>
                )}
              </td>
            ))}
            <td>
              <Button
                onClick={() => removeRow(rowIndex)}
                className="remove-button"
              >
                Удалить строку
              </Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={columns.length || 1}>Нет строк</td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
