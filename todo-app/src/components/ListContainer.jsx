import DoneList from "./DoneList";
import TodoList from "./TodoList";
import "../style/main.scss";

export default function ListContainer() {
  return (
    <div className="container">
      <TodoList />
      <DoneList />
    </div>
  );
}
