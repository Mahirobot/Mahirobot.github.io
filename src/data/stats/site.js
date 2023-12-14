import React, { useState, useEffect } from 'react';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/mldangelo/personal-site
 */
const Industryexp = () => {
  const [exp, setExp] = useState();

  const tick = () => {
    const startTime = new Date('2022-04-01');
    const time =(Date.now() - startTime) / 1000;
    const year  = Math.abs(Math.floor((time/(60 * 60 * 24))/365.2421897));
    const month = Math.abs(Math.round(time/(60 * 60 * 24 * 7 * 4)));
    // const days = Math.abs(Math.round(time/(3600 * 24)));
    setExp(year + " years, " + month + " months");
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{exp}</>;
};

const data = [
  {
    label: 'Work Experience - Academia',
    key: 'experience_Academia',
    value: '3 years, 4 months',
  },
  {
    label: 'Work Experience - Industry',
    key: 'experience_Industry',
    value: <Industryexp />,
  },
  {
    label: 'Projects in Data Science and ML',
    key: 'projects',
    value: '15+',
  },
  {
    key: 'problems',
    label: 'Coding problems solved',
    value: '100+',
  },
];

export default data;
