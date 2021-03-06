import React, { useState } from "react";
import auth from "./../auth/auth-helper";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import FileUpload from "@material-ui/icons/AddToQueue";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { create } from "./api-media.js";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    padding: 50,
    [theme.breakpoints.down("sm")]: {
      padding: "50px 0",
    },
  },
  title: {
    margin: theme.spacing(2),
    color: theme.palette.protectedTitle,
    fontSize: "1em",
  },
  error: {
    verticalAlign: "middle",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
  input: {
    display: "none",
  },
  filename: {
    marginLeft: "10px",
  },
}));

export default function NewMedia() {
  const classes = useStyles();
  const [values, setValues] = useState({
    title: "",
    video: "",
    description: "",
    genre: "",
    redirect: false,
    error: "",
    mediaId: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const jwt = auth.isAuthenticated();

  const clickSubmit = () => {
    setIsLoading(true);
    let mediaData = new FormData();
    values.title && mediaData.append("title", values.title);
    values.video && mediaData.append("video", values.video);
    values.description && mediaData.append("description", values.description);
    values.genre && mediaData.append("genre", values.genre);
    create(
      {
        userId: jwt.user._id,
      },
      {
        t: jwt.token,
      },
      mediaData
    ).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
        setIsLoading(false);
      } else {
        setValues({ ...values, error: "", mediaId: data._id, redirect: true });
        setIsLoading(false);
      }
    });
  };

  const handleChange = (name) => (event) => {
    const value = name === "video" ? event.target.files[0] : event.target.value;
    setValues({ ...values, [name]: value });
  };

  if (values.redirect && isLoading) {
    // return <Redirect to={"/media/" + values.mediaId} />;
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="headline" component="h1" className={classes.title}>
            New Video
          </Typography>
          <input
            accept="video/*"
            onChange={handleChange("video")}
            className={classes.input}
            id="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <Button color="secondary" variant="contained" component="span">
              Upload
              <FileUpload />
            </Button>
          </label>{" "}
          <span className={classes.filename}>
            {values.video ? values.video.name : ""}
          </span>
          <br />
          <TextField
            id="title"
            label="Title"
            className={classes.textField}
            value={values.title}
            onChange={handleChange("title")}
            margin="normal"
          />
          <br />
          <TextField
            id="multiline-flexible"
            label="Description"
            multiline
            rows="2"
            value={values.description}
            onChange={handleChange("description")}
            className={classes.textField}
            margin="normal"
          />
          <br />
          <TextField
            id="genre"
            label="Genre"
            className={classes.textField}
            value={values.genre}
            onChange={handleChange("genre")}
            margin="normal"
          />
          <br />
          <br />{" "}
          {values.error && (
            <Typography component="p" color="error">
              <Icon color="error" className={classes.error}>
                error
              </Icon>
              {values.error}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={clickSubmit}
            className={classes.submit}
          >
            {isLoading ? (
              <CircularProgress size={24} color="secondary" />
            ) : (
              "Submit"
            )}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
