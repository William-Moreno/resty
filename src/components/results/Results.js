import React from 'react';
import JSONPretty, { propTypes } from 'react-json-pretty';
import './results.scss';
import { If, Else, IsObjectEmpty } from '../if/If.js';

export const Results = ({ request, toggle }) => {
  console.log('results page', request);
  return (
    <div className="App.results">
      <If condition={request.body}>
        <h3 className="results-title">Results Window</h3>
          <h4 className="response-sections">Count</h4>
          <JSONPretty id="json-pretty1" className="json-pretty" data={request}></JSONPretty>
          {/* <h4 className="response-headers">Response Headers</h4>
          <JSONPretty id="json-pretty1" className="json-pretty" data={request.body.header}></JSONPretty> */}
          <h4 className="response-body">Results</h4>
          <JSONPretty id="json-pretty2" className="json-pretty" data={request}></JSONPretty>
      </If>
      <Else condition={request.body}>
        <h3 className="no-results">No Data to Display</h3>
      </Else>
    </div>
  )
};