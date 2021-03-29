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
      historySearch: {
        url: '',
        method: '',
      }
    }
  }


  updateResults = (request) => {

    let historyChecker = ls.get('history') || [];
    console.log('in', historyChecker);
    let historyUpdate;

    console.log(historyChecker.indexOf(request));

    if(historyChecker.indexOf(request) === -1) {
      historyChecker.unshift(request);
      console.log('added');
    }
    
    historyUpdate = historyChecker;

    console.log('preset ls', historyUpdate);

    ls.set('history', historyUpdate);

    this.setState({
      history: historyUpdate,
      request: request,
    });

  }

  toggle = () => {
    this.setState({ isLoading: !this.state.isLoading });
  }

  populateSearchFromHistory = (e) => {
    let historySearch = e.target.textContent;
    let components = historySearch.split(' ');
    this.setState({
      historySearch: {
        url: components[1],
        method: components[0],
      },
    });

  }

  // updateResults = (request) => {
  //   if(!ls.get('history')){
  //     ls.set('history', request);
  //   } else {
  //     let currentHistory = ls.get('history');
  //     console.log(currentHistory);
  //     if(currentHistory.includes(request)) {
  //       currentHistory = ls.get('history');
  //     } else {
  //       currentHistory.unshift(request);
  //     }
  //     ls.set('history', currentHistory);
  //   }
    
  //   this.setState({
  //     history: ls.get('history'),
  //     request: request,
  //   });
  // }


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
                <Form updateResults={this.updateResults} historySearch={this.state.historySearch} toggle={this.toggle} />
              </div>
              <div className="history-results">
                <History history={this.state.history} populateSearchFromHistory={this.populateSearchFromHistory} />
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
