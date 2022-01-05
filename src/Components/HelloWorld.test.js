import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test("Should display name prop in an h1", () => {
    const name = "Tyler";
    render(<HelloWorld name={name}/>);
    expect(screen.getByText(name)).toBeVisible();
    expect(screen.getByText(name).tagName).toBe("H1");
})