import React from 'react';
import uuid from 'uuid';

class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            todos: [],
            todoText: ''
        }
    }

    updateTodoText = (event) => {
        this.setState({todoText: event.target.value})
        
    }
    deleteTodo = (todo) => {
        const id = todo.id
        const updateTodo = this.state.todos.filter(todo => todo.id !== id)
        this.setState({todos: updateTodo}) 
    }
    addNewTodo = () => {
        const newTodo = {
            id: uuid(),
            name: this.state.todoText
        }
        const newTodoList = this.state.todos.concat(newTodo);
        const todosWithIndex = newTodoList.map((todo, index) => ({
            ...todo,
            index,
          }));
      
          const reservedTodoList = todosWithIndex.sort(function(a, b) {
            if (a.index > b.index) {
              return -1;
            } else {
              return 1;
            }
          });
        
        this.setState({todos: reservedTodoList, todoText: ''})
    }
    render(){
        return(
            <div>
                <h1>My Todo List</h1>
                <div>
                    <h5>{`you have ${this.state.todos.length} todolist` }</h5>
         
                </div>
               
                <div>
                    <input type="text" 
                    name="todoText"  
                    placeholder='enter a new todo'
                    onChange={this.updateTodoText}
                    value={this.state.todoText}
                    />
                    <button onClick={this.addNewTodo} >Add Todo</button>
                </div>
                <div>
                {
                    this.state.todos.length === 0 ? <p>you todo list empty add a todo</p> : (
                        <ol>
                        {
                            this.state.todos.map((todo, index) => {
                                return (
                                    <div key={index}>
                                        <li>
                                            <b>{todo.name} </b>
                                            <button 
                                            onClick={(event) => this.deleteTodo(todo)} >
                                            delete</button>
                                        </li>
                                    </div>
                                )
                            })
                        }
                        </ol>
                    )
                }
                </div>
            </div>
        )
    }
}
export default Todo