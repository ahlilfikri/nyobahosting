import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './/pages/home/index';

const Routing = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default Routing;
