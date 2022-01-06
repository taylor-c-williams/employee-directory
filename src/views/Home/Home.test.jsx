import Home from './Home';

it('should render the Home view', () => {
  const { container } = <Home />;
  expect(container).toMatchSnapshot();
});
