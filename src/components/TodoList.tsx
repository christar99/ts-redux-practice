import { todo } from "../modules/todos";
import TodoItem from "./TodoItem";

type TodoListProps = {
    todos: todo[];
    onChecked: (id: number) => void;
    onRemove: (id: number) => void;
}

function TodoList({ todos, onChecked, onRemove }: TodoListProps) {
    if(todos.length === 0) return <p>등록된 항목이 없다.</p>
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    todo={todo}
                    onChecked={onChecked}
                    onRemove={onRemove}
                    key={todo.id}
                />
            ))}
        </ul>
    )
};

export default TodoList;