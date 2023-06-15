import FastivalBandList from "./fastival-band-list";
import { render, screen } from "@testing-library/react";
import { Fastivals } from "./types";


describe('fastival brand Component', () => {
 test("fastival brand component Render Correctly",()=> { render(
        <FastivalBandList   bandName="Coffee" fastival="Hot" />
    )
    const nameElement=screen.getByText(/Coffee/i);
    const recordLabelElement=screen.getByText(/Hot/i);
    expect(nameElement).toBeInTheDocument();
    expect(recordLabelElement).toBeInTheDocument();}
 )
})
