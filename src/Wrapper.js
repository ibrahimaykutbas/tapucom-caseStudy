import React, {Component} from 'react';
import Router from './Router';
import AuthProvider from './context/AuthProvider/AuthProvider';

class Wrapper extends Component {
  render() {
    return (
      <AuthProvider>
        <Router />
      </AuthProvider>
    );
  }
}

export default Wrapper;

/* export default () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};
 */
