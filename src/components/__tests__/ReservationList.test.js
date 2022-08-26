import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import ReservationList from '../ReservationList';

describe('Test presence of Reservations', () => {
  test('should renderReservations component', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <ReservationList />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
