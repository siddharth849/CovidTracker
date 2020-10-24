import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import cx from 'classnames'

import styles from './Cards.module.css'
import CountUp from 'react-countup'


const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
  if(!confirmed){
    return 'Loading ...'
  }
  return (
    <div className={styles.container}>
    <Grid container spacing={3} justify="center">
      <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
        <Typography color="textSecondary" gutterBottom>Infected</Typography>
        <Typography variant="h5">
          <CountUp start={0} end={confirmed.value} duration={3} seperator=","/>
        </Typography>
        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant="body2" gutterBottom>Number of active cases of COVID-19</Typography>
      </Grid>
      <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
        <Typography variant="h5">
          <CountUp start={0} end={recovered.value} duration={3} seperator=","/>
        </Typography>
        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant="body2" gutterBottom>Number of recovered cases of COVID-19</Typography>
      </Grid>
      <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
        <Typography variant="h5">
          <CountUp start={0} end={deaths.value} duration={3} seperator=","/>
        </Typography>
        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant="body2" gutterBottom>Number of deaths during COVID-19</Typography>
      </Grid>
    </Grid>
    </div>
  )
}

export default Cards
