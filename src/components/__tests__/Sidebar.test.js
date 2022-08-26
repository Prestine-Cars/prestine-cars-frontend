import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import Sidebar from '../Sidebar';

describe('Test presence of Sidebar', () => {
  test('should render Sidebar component', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Sidebar />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
