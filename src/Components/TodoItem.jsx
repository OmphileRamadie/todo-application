import "./CSS/TodoItems.css"
import tick from "./Assets/tick.png"
import not_tick from "./Assets/not_tick.png"
import cross from "./Assets/cross.png"

const TodoItem = ({ no, display, text, setTodos }) => {
     
    const toggle = () => {
        let data = JSON.parse(localStorage.getItem("todos"))

        for (let i = 0; i < data.length; i++){
            if (data[i].no === no) {
                if (data[i].display === ""){
                    data[i].display = "line-through"
                } else {
                    data[i].display = "";
                }
                break;
            } 
        }

        setTodos(data)
    }

    const deleteTodo = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"))
        data = data.filter((todo) => { todo.no !== no })
        setTodos(data)
        
    }

  return (
      <div className="todo-items">
          <div className={`todoitems-container ${display}`} onClick = {()=>{toggle()}}>
              {display === ""? <img src = {not_tick} alt = "" /> :   <img src={tick} alt="" /> }
             
              <div className="todoitems-text">{text}</div>

          </div>
           <img  className = "todoitems-cross-icon" src={cross} alt="" onClick = {()=>{deleteTodo(no)}} />
    </div>
  )
}

export default TodoItem