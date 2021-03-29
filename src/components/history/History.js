import React from 'react';
import './history.scss';

export const History = ({ populateSearchFromHistory, history }) => {
  
  const populateHistorySearch = (e) => {
    console.log('in history repop', e.target.textContent);
    populateSearchFromHistory(e);
  }

  return (
    <div className="history-frame">
      <h3>History Header</h3>
        {history.map((request, idx) => <li key={idx} onClick={populateHistorySearch} >
          <span className="history-method">{request.method} {request.url}</span>
        </li>)}
    </div>
  )
};
