import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";
import { useAppDispatch, useAppSelector } from "../modules";
import { addTodo, checkTodo, removeTodo } from "../modules/todos";

function TodoApp () {
    const todos = useAppSelector(state => state.todos.todoList);
    const dispatch = useAppDispatch();

    const onInsert = (text: string) => dispatch(addTodo(text));

    const onChecked = (id: number) => dispatch(checkTodo(id));

    const onRemove = (id: number) => dispatch(removeTodo(id));

    return (
        <>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onChecked={onChecked} onRemove={onRemove} />
        </>
    )
}

export default TodoApp;