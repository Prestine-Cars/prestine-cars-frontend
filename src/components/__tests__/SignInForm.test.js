import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import SignInForm from '../SignInForm';

describe('Test presence of Sign In Form', () => {
  test('should render Sign In Form component', () => {
    const signInForm = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <SignInForm />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(signInForm).toMatchSnapshot();
  });
});
