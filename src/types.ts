export type ColumnType = "string" | "percentage";

export interface Column {
  id: string;
  type: ColumnType;
}

export interface RowData {
  [key: string]: string;
}