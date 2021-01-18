import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 24,
  },

  pos: {
    marginBottom: 12,
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Теги
        </Typography>

        <Typography variant="h5" component="h2"></Typography>
        <Typography className={classes.pos} color="textSecondary">
          Tag1
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Tag1
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Tag1
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Save</Button>
        <Button size="small">Close</Button>
      </CardActions>
    </Card>
  );
}
