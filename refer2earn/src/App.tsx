import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Rewards from './pages/Rewards';
import SignUp from './components/SignUp';
import AccountManagement from './components/AccountManagement';
import Referral from './components/Referral';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/account" component={Account} />
          <Route path="/rewards" component={Rewards} />
          <Route path="/account-management" component={AccountManagement} />
          <Route path="/referral" component={Referral} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;