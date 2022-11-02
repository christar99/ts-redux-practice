import { CSSProperties } from "react";
import { todo } from "../modules/todos";

type TodoItemProps = {
    todo: todo;
    onChecked: (id: number) => void;
    onRemove: (id: number) => void;
}

function todoItem({ todo, onChecked, onRemove }: TodoItemProps) {
    const textStyle: CSSProperties = {
        textDecoration: todo.done ? 'line-through' : 'none'
    };

    const removeStyle: CSSProperties = {
        marginLeft: 8,
        color: 'red'
    };

    const handleChecked = () => {
        onChecked(todo.id);
    };

    const handleRemove = () => {
        onRemove(todo.id);
    }

    return (
        <li>
            <span onClick={handleChecked} style={textStyle}>
                {todo.text}
            </span>
            <span onClick={handleRemove} style={removeStyle}>
                X
            </span>
        </li>
    );
}

export default todoItem;