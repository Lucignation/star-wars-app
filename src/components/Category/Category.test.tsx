import Category from './category.component';
import renderer from 'react-test-renderer';

const _category = {
  title: 'title',
  total: 30,
  info: 'category information',
  colorCode: '#fff',
};

const mockProps = {
  category: _category,
};

describe('Category', () => {
  it('enders a snapshot of <Category /> when passed into a component', () => {
    const category = renderer.create(<Category {...mockProps} />).toJSON();

    expect(category).toMatchSnapshot();
  });
});
