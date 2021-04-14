import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03.-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks />',()=>{

    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
    })

    test('Debe de mostrarse correctamente', () => {
        
        useFetch.mockReturnValue({
            data:null,
            loading:false,
            error: null
        })
        const wrapper = shallow( <MultipleCustomHooks /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar la informacion', () => {
       
        useFetch.mockReturnValue({
            data:[{
                author: 'Jonathan',
                quote: 'Hola mundo'
            }],
            loading:false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-3').text().trim() ).toBe( 'Hola mundo' );
        expect( wrapper.find('footer').text().trim() ).toBe( 'Jonathan' );


        
    });
    



});