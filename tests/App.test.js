import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/App';

it('render app', () => {
  shallow(<App />)
})
