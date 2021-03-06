import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import MediaList from "../media/MediaList";
import { listPopular } from "../media/api-media.js";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: `${theme.spacing(5)}px 15px`,
    paddingTop: "30px",
    [theme.breakpoints.down("sm")]: {
      margin: `${theme.spacing(5)}px 0px`,
    },
  },

  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px 0px`,
    color: theme.palette.text.secondary,
    fontSize: "1em",
  },
  media: {
    minHeight: 330,
  },
  spinner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
}));

export default function Home() {
  const classes = useStyles();
  const [media, setMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    listPopular(signal).then((data) => {
      if (data.error) {
        console.log(data.error);
        setIsLoading(false);
      } else {
        setMedia(data);
        setIsLoading(false);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <div className={classes.card}>
      <Typography variant="h2" className={classes.title}>
        Popular Videos
      </Typography>
      {isLoading ? (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      ) : (
        <MediaList media={media} />
      )}
    </div>
  );
}
