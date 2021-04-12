

const initialState = [{
    id: 1,
    todo: 'Aprender React',
    done: false
}];

const todoReducer = ( state = initialState, action ) => {

    if(action?.type === 'agregar'){
        return [ ...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();


const nuevoTodo = {
    id: 2,
    todo: 'Aprender Angular',
    done: false
};

const agregarTodoAction = {
    type: 'agregar',
    payload: nuevoTodo
}

todos = todoReducer( todos, agregarTodoAction );



console.log(todos);
