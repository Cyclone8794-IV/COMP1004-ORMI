import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Tasks } from './components/Tasks';
import { Timeline } from './components/Timeline';
import { Profile } from './components/Profile';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () { // This basically switches out the contents of the container depending on the path used.
      // Use <Route path>
      // If path of route is the same as path, then load the component within layout.
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/Tasks' component={Tasks} />
            <Route path='/Timeline' component={Timeline} />
            <Route path='/Profile' component={Profile} />
      </Layout>
    );
  }
}
