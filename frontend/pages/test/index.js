import React from 'react';

// import { Draft } from './components/Draft';
import { Draft } from './components/DraftReactInside';

class Page_test extends React.Component {
  render = () =>
    <div className="container">
      <Draft/>
    </div>
}

export { Page_test };