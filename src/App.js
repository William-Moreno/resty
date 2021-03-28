import React from 'react';
import './App.scss';
import ls from 'local-storage';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Form from './components/form/Form.js';
import { Results } from './components/results/Results.js';
import { History } from './components/history/History.js';
import Help from './components/help/Help.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      history: ls.get('history') || [],
      request: {
        body: {},
      },
      isLoading: false,
    }
  }

  // componentDidMount() {
  //   this.setState({ history: ls.get('history') || [] });
  // }

  updateResults = (request) => {

    let historyUpdate;

    if(!this.state.history.includes(request)) {
      historyUpdate = [ request, ...this.state.history];
    } else {
      historyUpdate = [request];
    }

    this.setState({
      history: historyUpdate,
      request: request,
    });

    ls.set('history', historyUpdate);
  }

  toggle = () => {
    this.setState({ isLoading: !this.state.isLoading });
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/history">
            <div className="history-page">
              <History history={this.state.history} />
            </div>
          </Route>
          <Route path="/help">
            <div className="help-page">
              <Help />
            </div>
          </Route>
          <Route path="/">
            <main className="App-main">
              <div className="form-area">
                <Form updateResults={this.updateResults} history={this.state.history} toggle={this.toggle} />
              </div>
              <div className="history-results">
                <History history={this.state.history} />
                <Results request={this.state.request} toggle={this.isLoading} />
              </div>
            </main>
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
