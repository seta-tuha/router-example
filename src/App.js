import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PostDetails from './PostDetails';
import PostsList from './PostsList';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Link to="/">Home</Link>
          <Route exact path="/" component={PostsList} />
          <Route exact path={`/posts/:postId`} component={PostDetails} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
