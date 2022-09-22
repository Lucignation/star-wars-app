import Navbar from './navbar.component';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

const mockProps = {
  backBtn: false,
};

describe('Navbar', () => {
  it('renders a snapshot of <Navbar /> when passed into a component', () => {
    const navbar = renderer
      .create(
        <Router>
          <Navbar {...mockProps} />
        </Router>
      )
      .toJSON();

    expect(navbar).toMatchSnapshot();
  });
});
