import Button from './button.component';
import renderer from 'react-test-renderer';

const mockProps = {
  btnText: 'Log in',
};

describe('Button', () => {
  it('renders a snapshot of <Button /> when passed into a component', () => {
    const button = renderer.create(<Button {...mockProps} />).toJSON();

    expect(button).toMatchSnapshot();
  });
});
