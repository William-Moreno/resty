import React from 'react';
import './history.scss';

export const History = ({ history }) => {
  return (
    <div className="history-frame">
      <h3>History Header</h3>
        {history.map((request, idx) => <li key={idx} >
          <span className="history-method">{request.method}</span>
          <span className="history-url">{request.url}</span>
        </li>)}
    </div>
  )
}