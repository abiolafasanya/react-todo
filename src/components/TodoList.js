
import Todo from './Todo'

function TodoList({todo, onDelete, onChange}) {
    
    return (
        <div>
            <>
                {todo.map((todos) => (<Todo 
                            key={todos.id}
                            todo={todos} 
                            onDelete={onDelete}
                            onChange={onChange}
                            />))}
            </>
        </div>
    )
}


export default TodoList