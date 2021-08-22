import { alpha, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2em 0em'
  },
  picroot: {
    margin: '1em',
    maxWidth: 450,
    minWidth: 275
  },
  media: {
    height: 120,
  },
  description: {
    padding: '1em 2em'
  },
  cardscontainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  spacer: {
    padding: '0em 0.5em'
  },
  verticlespacer: {
    padding: '0.5em 0em'
  }
}));

function LoggedFront() {
  const classes = useStyles();
  const history = useHistory();

  const goLogin = () => {
      history.push('/login');
  }

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Typography variant="h3">
          Parking accessability evaluation tool
        </Typography>
        <Typography variation="h6" className={classes.description}>
        With available space quickly getting used up, it is necessary for governments and city planners to look at what spaces can be repurposed among our already crowded suburbs. One of the most noticeable possibilities for refurbishment is car parking spaces. 
What this project has strived to do is analyse the relevant data from ABS and data from the NSW Government to better assess and understand the factors that should be considered when looking at the size of parking spaces. We wish to keep our observations in line with the Future Transport Strategy as proposed by the NSW Government, looking to change the way the majority population travels within the city from majority using private vehicle transportation, to shared modes of transportation like trains and buses. What we have created does not conflict with current legislations and is reliant solely on information currently freely available by the Government.
        </Typography>
      </div>
      <div className={classes.cardscontainer}>
        <Card className={classes.picroot}>
        <CardActionArea onClick={goLogin}>
          <CardMedia
            className={classes.media}
            image="/heat-map.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Check accessability by location
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Assess the accessbility by location
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={goLogin}>
            Explore now
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.picroot}>
        <CardActionArea onClick={goLogin}>
          <CardMedia
            className={classes.media}
            image="/download.jpeg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Scenario planning
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              The accessbility calculator... coming in 2022
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.picroot}>
        <CardActionArea onClick={goLogin}>
          <CardMedia
            className={classes.media}
            image="/future.jpeg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Forecast carspace demand
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Coming in 2022
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </div>
    </Container>
  );
}

export default LoggedFront;
