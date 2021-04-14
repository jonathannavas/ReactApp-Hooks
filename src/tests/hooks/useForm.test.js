import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en <useForm />',()=>{

    const initialForm = {
        name: 'jonathan',
        email: 'jonathan.navas9@hotmail.com'
    };

    test('Debe de regresar un formulario por defecto ', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        expect( result.current[0] ).toEqual( initialForm );
    });

    test('Debe de cambiar el valor del formulario (cambiar name) ', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ ,handleInputChange] = result.current;

        act( ()=>{
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Gabriel'
                }
            });
        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( {...initialForm, name: 'Gabriel'} );
    });
    
    test('debe de restablecer el formulario con RESET', () => {

        const { result } = renderHook( () => useForm(initialForm) );
        const [ ,handleInputChange,reset] = result.current;

        act( ()=>{
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Gabriel'
                }
            });
            reset();
        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( initialForm );
    });
    
    

});