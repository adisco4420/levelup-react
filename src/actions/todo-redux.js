import { combineReducers, createStore} from 'redux';

export const ADD_TODO = '[Todo] add a todo';
export const DELETE_TODO = '[Todo] delete todo';

let id = Math.random() * 5;

export const ADD_ACTION = {
    type: ADD_TODO,
    payload: {
        id: id++,
        title : 'the land is green',
    }
}

const instialState = {
    todos: []
}

function reducer(state = instialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign(
                state,
                {},
                {
                    todos: state.todos.concat(action.payload)
                }
            )
        case DELETE_TODO:
                return {
                    todos: state.todos.filter((todo) => todo.id !== 
                    action.payload.id)
                }
        default:
        return state;
    }
}

export const store = createStore(reducer, instialState)
