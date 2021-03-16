// App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import AppComponent from './App';
import Login from './login/index';
import Game from './game/index';

const useremail = "";
describe("MyComponent", () => {
    it("should render app component", () => {
        const wrapper = shallow(<AppComponent />);
    });

    it("should render login component", () => {
        let wrapper;
        if (!useremail)
            wrapper = shallow(<Login />);
        else
            wrapper = shallow(<Game />);
    });
});

