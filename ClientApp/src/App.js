import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () { // This basically switches out the contents of the container depending on the path used.
      // Use <Route path>
    return (
      <Layout>
        <Route exact path='/' component={Home} />
      </Layout>
    );
  }
}
