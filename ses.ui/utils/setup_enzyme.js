// const enzyme = require("enzyme");
// const Adapter = require("enzyme-adapter-react-16");

// enzyme.configure({ adapter: new Adapter() });

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
export { shallow, mount, render };
export default Enzyme;