import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import CarForm from '../CarForm';

describe('Test presence of Car Form', () => {
  test('should render Car Form component', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <CarForm />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
