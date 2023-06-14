import React from 'react';
import { screen, render } from '@testing-library/react';
import Fastivals from './fastival';

describe('fastival render Correctly',()=>{
    it.only('Component render Correctly ',()=>{
        render(<Fastivals/>)
        const textElement=screen.getByText(/Energy Australia/i)
        expect(textElement).toBeInTheDocument();
    });

    it('render the fastival list', ()=>{
        render(<Fastivals/>)
        const fastivals=  screen.getByText(/Winter Primates/i);
        expect(fastivals).toBeInTheDocument()
    })

})