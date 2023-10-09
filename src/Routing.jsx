import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index.jsx';

const Routing = () => {
  return (
      <Fragment>
        <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
        </Router>
      </Fragment>
  );
};

export default Routing;
