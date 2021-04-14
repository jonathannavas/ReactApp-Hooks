import { todoReducer } from "../../../components/08.-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";

describe('pruebas en <todoReducer />',()=>{
   
    test('debe de retornar el estado por defecto',()=>{
        const state = todoReducer(demoTodos,{});
        expect( state ).toEqual( demoTodos );
    });

    test('debe de agregar un todo', ()=>{
        const nuevoTodo = {
            id: 3,
            desc: 'Aprender Mongo',
            done: false
        };
        const action = {
            type: 'add',
            payload: nuevoTodo
        }
        const state = todoReducer( demoTodos, action );
        expect( state.length ).toBe(3);
        expect( state ).toEqual([...demoTodos, nuevoTodo]);
    });

    test('debe de borrar un todo',()=>{

        const action = {
            type: 'delete',
            payload: 2
        }

        const state = todoReducer( demoTodos, action );
        expect( state.length ).toBe( 1 );

    });

    test('debe de hacer el toggle del todo',()=>{
        const action = {
            type: 'toggle',
            payload: 2
        }
        const state = todoReducer( demoTodos, action );
        expect( state[1].done ).toEqual( true );
    });


    
});