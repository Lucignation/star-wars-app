import Input from './input.component';
import renderer from 'react-test-renderer';

const mockProps = {
  formType: 'text',
  placeholder: 'First Name',
  value: 'Gerald',
  setValue: () => 'Gerald',
  name: 'firstName',
};

describe('Input: ', () => {
  it('renders a snapshot of <Input /> when input is passed to a component ', () => {
    const input = renderer.create(<Input {...mockProps} />).toJSON();

    expect(input).toMatchSnapshot();
  });
});
