import { Button, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

import './testing.css';

const Header = ({ data, setRegion, region }) => {
  const [chartsData, setChartsData] = useState([]);

  useEffect(() => {
    const modifiedData = data.map((d) => {
      return {
        ...d,
        uniqueNames: [...new Set(d.names)],
        percentages: [...new Set(d.names)].map((c) => {
          return (
            (d.names.filter((v) => v === c).length / d.count) *
            100
          ).toFixed(2);
        }),
      };
    });

    setChartsData(modifiedData);
  }, [data]);

  //   console.log(chartsData);
  const getData = (id) => {
    const category = chartsData.filter((item) => item._id === id);

    const finalArray = category[0].uniqueNames.map((data, i) => {
      return {
        name: data,
        value: category[0].percentages[i] * 1,
      };
    });
    return finalArray;
  };

  const huehue = [
    { name: 'hello', value: 50 },
    { name: 'Hi', value: 50 },
    { name: 'Cello', value: 50 },
    { name: 'bye', value: 50 },
  ];

  //   console.log(getData('Information Technology'));

  //   console.log(chartsData);

  if (chartsData.length === 0) {
    return (
      <Grid container justify="center">
        <Grid item md={3}>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={huehue}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          backgroundColor: '#571b7750',
          padding: '7px',
          marginLeft: '-9px',
          marginRight: '-8px',
          marginTop: '-9px',
          marginBottom: '7px',
          color: 'black',
          fontWeight: 'bold',
        }}
      >
        Values on hover shows the percentage of that topic in that sector
      </div>
      <div
        style={{
          display: 'flex',
          marginBottom: '20px',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          color={region === 'World' ? 'primary' : 'secondary'}
          onClick={() => setRegion('World')}
          className="region_btn"
        >
          World
        </Button>
        <Button
          variant="contained"
          color={region === 'Central America' ? 'primary' : 'secondary'}
          onClick={() => setRegion('Central America')}
          className="region_btn"
        >
          Central America
        </Button>
        <Button
          variant="contained"
          color={region === 'Northern America' ? 'primary' : 'secondary'}
          onClick={() => setRegion('Northern America')}
          className="region_btn"
        >
          Northern America
        </Button>
        <Button
          variant="contained"
          color={region === 'Western Asia' ? 'primary' : 'secondary'}
          onClick={() => setRegion('Western Asia')}
          className="region_btn"
        >
          Western Asia
        </Button>
        <Button
          variant="contained"
          color={region === 'Northern Africa' ? 'primary' : 'secondary'}
          onClick={() => setRegion('Northern Africa')}
          className="region_btn"
        >
          Northern Africa
        </Button>
        <div style={{ fontSize: 20, fontColor: '#8884d8' }}>
          <b>Region:</b> {region ? region : 'Not selected'}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexdirection: 'row',
          flexwrap: 'nowrap',
          overflowX: 'scroll',
          marginLeft: '-8px',
          marginRight: '-8px',
          marginTop: '-9px',
          paddingTop: '0px',
          paddingRight: '7px',
        }}
        className="container"
      >
        {chartsData.map((chart) => (
          <div item key={chart._id} md={4} className="chart_item">
            <div
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: '#31004A',
                paddingBottom: '2px',
                marginBottom: '7px',
                marginTop: '5px',
              }}
            >
              <i>Sector: </i>
              {chart._id}
            </div>
            <PieChart width={300} height={227} style={{ marginBottom: '10px' }}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={getData(chart._id)}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#31004A"
                label
              />
              <Tooltip />
            </PieChart>
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;
