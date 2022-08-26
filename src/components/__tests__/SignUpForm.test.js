import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import SignUpForm from '../SignUpForm';

describe('Test presence of Sign Up Form', () => {
  test('should render Sign Up Form component', () => {
    const signInForm = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <SignUpForm />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(signInForm).toMatchSnapshot();
  });
});
