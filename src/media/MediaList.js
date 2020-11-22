import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import GridListTile from "@material-ui/core/GridListTile";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

import config from "./../config/config";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    background: theme.palette.background.paper,
    textAlign: "left",
    padding: "8px 16px",
    [theme.breakpoints.down("sm")]: {
      padding: "8px 0px",
    },
  },
  gridList: {
    width: "100%",
    minHeight: 180,
    padding: "0px 0 10px",
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.openTitle,
    width: "100%",
  },
  tile: {
    textAlign: "center",
    maxHeight: "100%",
  },
  tileBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    textAlign: "left",
    height: "55px",
  },
  tileTitle: {
    fontSize: "1.1em",
    marginBottom: "5px",
    color: "rgb(193, 173, 144)",
    display: "block",
    textDecoration: "none",
  },
  tileGenre: {
    float: "right",
    color: "rgb(193, 182, 164)",
    marginRight: "8px",
  },
}));

function MediaList(props) {
  const [col, setCol] = useState(3);
  const classes = useStyles();

  const getGridListCols = () => {
    if (props.width === "xs") {
      setCol(1);
    } else if (props.width === "sm") {
      setCol(2);
    } else {
      setCol(3);
    }
  };

  useEffect(() => {
    getGridListCols();
  }, [props.width]);

  return (
    <div className={classes.root}>
      <GridList cellHeight="auto" className={classes.gridList} cols={col}>
        {props.media.map((tile, i) => (
          <GridListTile key={i} className={classes.tile}>
            <Link to={"/media/" + tile._id}>
              <ReactPlayer
                url={config.serverUrl + "/api/media/video/" + tile._id}
                width="100%"
                height="auto"
                style={{ maxHeight: "100%" }}
              />
            </Link>
            <GridListTileBar
              className={classes.tileBar}
              title={
                <Link to={"/media/" + tile._id} className={classes.tileTitle}>
                  {" "}
                  {tile.title}{" "}
                </Link>
              }
              subtitle={
                <span>
                  <span>{tile.views} views</span>
                  <span className={classes.tileGenre}>
                    <em>{tile.genre}</em>
                  </span>
                </span>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default withWidth()(MediaList);
MediaList.propTypes = {
  media: PropTypes.array.isRequired,
};
