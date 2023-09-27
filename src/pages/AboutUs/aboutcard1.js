import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from './about.module.css'

export default function AboutCard1({card}) {
  return (
    
    <Card  sx={{ maxWidth: 450}} className={classes.cardpage}>
      <CardMedia className={classes.cardimage}
        sx={{ height: 200 }}
        image=""
        title=""
      />
      <CardContent>
      
        <Typography gutterBottom variant="h5" component="div">
         {card.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {card.desc}
        </Typography>
      </CardContent>
    
    </Card>
  );
}