import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Cities from '../Cities/Cities';
import store from '../../redux/store';

describe('Test presence of Cities', () => {
  test('should render Cities component', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Cities />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
