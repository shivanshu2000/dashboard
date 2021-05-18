import { Button, Grid, ThemeProvider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './Header';
import theme from './theme/theme';
import Main from './Main';

const App = () => {
  const [data, setData] = useState([]);
  const [region, setRegion] = useState('');

  const [secondData, setSecondData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const url =
      region === ''
        ? 'http://localhost:5000/'
        : `http://localhost:5000/?region=${region}`;
    axios.get(url).then((data) => {
      setData(data.data);
    });
  }, [region]);

  useEffect(() => {
    const url =
      filter === ''
        ? 'http://localhost:5000/second'
        : `http://localhost:5000/second?filter=${filter}`;
    axios.get(url).then((data) => {
      setSecondData(data.data);
    });
  }, [filter]);

  return (
    <ThemeProvider theme={theme}>
      <Header
        data={data}
        style={{ height: '500px' }}
        setRegion={setRegion}
        region={region}
      />
      <div
        style={{
          marginTop: '50px',
          marginBottom: '20px',
          borderBottom: '2px solid black',
        }}
      ></div>
      <Main data={secondData} filter={filter} setFilter={setFilter} />
    </ThemeProvider>
  );
};

export default App;
