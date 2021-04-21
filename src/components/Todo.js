import {FaTimes} from 'react-icons/fa'
function Todo({todo, onDelete, onChange}) {

    // const checkComplete = (todo) => {
    //     if(!todo.completed === true) {
    //         console.log('at this stage', todo.completed)
    //     }else {return true}
    // }
    return (
        <div>
            <div style={mystyle}>
                <div style={flexsytle}>
                <b>{todo.id}</b>
                <span><FaTimes style={{
                    color: 'red',
                    background: '#fff',
                    padding: '5px'
                    }} onClick={() => onDelete(todo.id)}/></span>
                </div>
                <h5>
                    <input type="checkbox" onChange={() => onChange(todo.id, todo.completed)}/>
                    {todo.title}
                    </h5>
                <p>{todo.desc}</p>
                <code>{todo.date}</code>
            </div>
        </div>
    )
}

const mystyle = {
    maxWidth: '80%',
    margin: '20px auto',
    backgroundColor: '#e8e7ec',
    padding: '15px',
    borderRadius: '5px'
}
const flexsytle = {
    display: 'flex',
    justifyContent: 'space-between'
}

export default Todo
