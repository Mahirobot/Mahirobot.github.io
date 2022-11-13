import React from 'react';
import Table from './Table';
import data from '../../data/stats/site';

const Stats = () => (
  <>
    <h3>Career</h3>
    <Table data={data} />
  </>
);

export default Stats;
