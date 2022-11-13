import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Publications/Cell';
import data from '../data/publications';

const Publications = () => (
  <Main
    title="Publications"
    description="Learn about Mahira Jalisha's publications."
  >
    <article className="post" id="publications">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/publications">Publications</Link></h2>
          <p>My publications</p>
        </div>
      </header>
      {data.map((publications) => (
        <Cell
          data={publications}
          key={publications.title}
        />
      ))}
    </article>
  </Main>
);

export default Publications;
