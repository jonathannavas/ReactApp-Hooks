
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04.-useRef/RealExampleRef';

describe('Prueba en <RealExampleRef />',()=>{

    const wrapper = shallow( <RealExampleRef /> );
    test('debe mostrarse correctamente',()=>{
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar el componente <MultipleCustomHooks /> ',()=>{
        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( true );
    });

});