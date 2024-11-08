import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Column, RowData } from "../../types";

interface TableContextType {
  columns: Column[];
  rows: RowData[];
  setColumns: Dispatch<SetStateAction<Column[]>>;
  setRows: Dispatch<SetStateAction<RowData[]>>;
  isModalOpen: boolean;
  jsonData: string;
  closeModal: () => void;
  generateJSON: () => void;
}

const TableContext = createContext<TableContextType | undefined>(undefined);

export const TableProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [columns, setColumns] = useState<Column[]>([
    { id: "col1", type: "string" },
    { id: "col2", type: "string" },
  ]);

  const [rows, setRows] = useState<RowData[]>([{ col1: "", col2: "" }]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jsonData, setJsonData] = useState<string>("");

  const generateJSON = () => {
    const data = { columns, rows };
    setJsonData(JSON.stringify(data, null, 2));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <TableContext.Provider
      value={{
        columns,
        rows,
        setColumns,
        setRows,
        isModalOpen,
        jsonData,
        closeModal,
        generateJSON,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTableContext must be used within a TableProvider");
  }
  return context;
};
