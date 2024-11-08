import "./App.scss";
import Table from "./components/pages/Table";
import { TableProvider } from "./components/context/TableContext";

function App() {
  return (
    <TableProvider>
      <Table />
    </TableProvider>
  );
}

export default App;
