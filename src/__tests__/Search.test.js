import React from 'react';
import { render } from '@testing-library/react';
import Search from "../Search";

test("render a search", () => {
    const wrapper = render(<Search />);
    expect(wrapper.baseElement).toMatchSnapshot();
})