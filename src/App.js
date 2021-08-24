import './styles/App.css';

import Navbar from './Navbar.js';
import NavItem from './NavItem.js';
import DropDown from './DropDown.js';
import {links} from './data/links.js';

import Heading from './Heading.js';
import SectionOne from './SectionOne.js';
import SectionTwo from './SectionTwo.js';
import SectionThree from './SectionThree.js';
import Footer from './Footer.js';
 
function App() {
  return (
    <div className="App">
      <div className="header bg-shapes">
        <div className="contain-width">
          <Navbar>
            {links.map(({title, links}) => {
              return (<NavItem title={title} >
                <DropDown links={links} />
              </NavItem>)
            })}
          </Navbar>
          <Heading />
        </div>
      </div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}

export default App;
