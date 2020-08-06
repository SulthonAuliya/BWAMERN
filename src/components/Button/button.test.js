import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Button from './Button'

test("should not allowed to be clicked if isDiables is pesented", () => {
    const {container} = render( <Button isDisabled></Button> );

    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should be render the Loading component when there is isLoading presented", () => {
    const {container, getByText} = render( <Button isLoading> </Button> );

    expect(getByText(/loading/i)).toBeInTheDocument();

    expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should be rendered as <a> tag", () => {
    const {container} = render(<Button type="link" isExternal> </Button> );


    expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should be rendered as <Link> component", () => {
    const {container} = render(
        <Router> 
            <Button href="" type="link" > </Button> 
        </Router>
    );

    expect(container.querySelector("a")).toBeInTheDocument();
});