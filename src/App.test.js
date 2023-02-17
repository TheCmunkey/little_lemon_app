import { render, screen } from '@testing-library/react';
import ReservationsForm from './components/ReservationsForm';
import HomeHeader from './components/HomeHeader';
import App from './App';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

// To run the test: >> npm test or npm run test, which are essentially the same command.


// test('Renders the ReservationsForm heading', () =>{

//     render(<ReservationsForm />);
//     const headingElement = screen.getByText("Little Lemon");
//     expect(headingElement).toBeInTheDocument();

// })

test('TEST 2: App ', () =>{

  render(<HomeHeader description={"Test"} />);
  const headingElement = screen.getByText("Little Lemon");
  expect(headingElement).toBeInTheDocument();

})

// The next step is to validate the behavior of the updateTimes and initializeTimes reducer functions.
//https://www.coursera.org/learn/meta-front-end-developer-capstone/supplement/DxJOR/exercise-update-the-unit-tests-for-the-api-queries
