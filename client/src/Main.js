import { Button, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Tooltip } from 'recharts';

import './testing.css';

const Main = ({ data, filter, setFilter }) => {
  const [chartsData, setChartsData] = useState([]);

  useEffect(() => {
    setChartsData(data);
  }, [data]);

  const huehue = [
    { name: 'hello', value: 50 },
    { name: 'Hi', value: 50 },
    { name: 'Cello', value: 50 },
    { name: 'bye', value: 50 },
  ];

  //   console.log(getData('Information Technology'));
  //   console.log(chartsData);

  console.log(chartsData);
  const title = filter;

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
          marginBottom: '20px',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          color={filter === 'Year' ? 'primary' : 'secondary'}
          onClick={() => setFilter('Year')}
          className="region_btn"
        >
          Year
        </Button>
        <Button
          variant="contained"
          color={filter === 'Topic' ? 'primary' : 'secondary'}
          onClick={() => setFilter('Topic')}
          className="region_btn"
        >
          Topic
        </Button>
        <Button
          variant="contained"
          color={filter === 'Sector' ? 'primary' : 'secondary'}
          onClick={() => setFilter('Sector')}
          className="region_btn"
        >
          Sector
        </Button>
        <Button
          variant="contained"
          color={filter === 'Pest' ? 'primary' : 'secondary'}
          onClick={() => setFilter('Pest')}
          className="region_btn"
        >
          Pest
        </Button>
        <Button
          variant="contained"
          color={filter === 'Source' ? 'primary' : 'secondary'}
          onClick={() => setFilter('Source')}
          className="region_btn"
        >
          Source
        </Button>
        <Button
          variant="contained"
          color={filter === 'Country' ? 'primary' : 'secondary'}
          onClick={() => setFilter('Country')}
          className="region_btn"
        >
          Country
        </Button>
        <Button
          variant="contained"
          color={filter === 'City' ? 'primary' : 'secondary'}
          onClick={() => setFilter('City')}
          className="region_btn"
        >
          City
        </Button>

        <div style={{ fontSize: 20, fontColor: '#8884d8' }}>
          <b>Filter:</b> {filter === '' ? 'Topic(default)' : filter}
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
        {chartsData.map((chart, i) => (
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
              <i>{filter || 'Topic'}: </i>
              {chart._id || 'NA'}
            </div>
            <PieChart width={300} height={227} style={{ marginBottom: '10px' }}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={[
                  {
                    name: 'Intensity',
                    value: chart.averageIntensity.toFixed(2) * 1,
                  },
                  {
                    name: 'Relevance',
                    value: chart.averageRelevance.toFixed(2) * 1,
                  },
                  {
                    name: 'Likelihood',
                    value: chart.averageLikelihood.toFixed(2) * 1,
                  },
                ]}
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

export default Main;
