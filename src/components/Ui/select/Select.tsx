import React from "react";
import { Column, ColumnType } from "../../../types";
import classes from "./Select.module.scss";

type SelectProps = {
  options: { value: string; name: string }[];
  col: Column;
  handleColumnTypeChange: (columnId: string, type: ColumnType) => void;
};

const Select: React.FC<SelectProps> = ({
  options,
  col,
  handleColumnTypeChange,
}) => {
  return (
    <select
      value={col.type}
      onChange={(e) =>
        handleColumnTypeChange(col.id, e.target.value as ColumnType)
      }
      className={classes.Slt}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
