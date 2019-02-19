import React from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store , ADD_TODO, DELETE_TODO} from './actions/todo-redux';
import './css/style.css';


let id = 0;
let value = '';
class TodoRedux extends React.Component {
    state = {
        todos: []
    }
    componentDidMount(){
        store.subscribe(() => {
          this.setState({todos: store.getState().todos})
        })
      }
      handleChange(event) {
          value = event.target.value;
        console.log(event.target.value);
        
      }
    render(){
        const  {todos} = this.state;
        return (
           
            <div>
                <div className="jumbotron text-center">
                    <h1>My Todo List React App</h1>
                    <p>this is an application created to store todos</p> 
                </div>

            <div className="container">
            <div className="row">
                <div className="col-sm-4  offset-sm-4">
                <div class="input-group mb-3">
                    <input onChange={this.handleChange} type="text" class="form-control" placeholder="Add Todo......." />
                    <div class="input-group-append">
                        <button class="btn btn-success" 
                        onClick={() => store.dispatch({
                            type: ADD_TODO,
                            payload: {
                              id: id++,
                              title: value,
                            }
                          })}
                        type="button">Add</button>
                    </div>
                    </div>
            </div>
            <div className='col-sm-4 offset-sm-4'>
            
              
            <ul className="list-group">
            {   
                this.state.todos.length === 0 ? <p>No todo in your todolist</p> : 
                
                todos.map((todo, index) => {
                  return <div key={index}>
                     <li className="list-group-item">{todo.title}
                        <button className='btn btn-danger float-right btn-sm'
                            onClick={() => store.dispatch({type: DELETE_TODO, payload: todo} )} >delete</button>
                        </li>
                    </div>
                })
              }
           
            </ul>
            </div>
       
            
            </div>
            </div>

            </div>
          );
    }
}
export default TodoRedux