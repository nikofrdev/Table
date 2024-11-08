import { useTableContext } from "../context/TableContext";
import Button from "../Ui/button/Button";

export default function Modal() {
  const { isModalOpen, jsonData, closeModal } = useTableContext();

  return (
    <div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>JSON Данных Таблицы</h3>
            <pre>{jsonData}</pre>
            <Button onClick={closeModal}>Закрыть</Button>
          </div>
        </div>
      )}
    </div>
  );
}
