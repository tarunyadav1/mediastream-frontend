import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import withWidth from "@material-ui/core/withWidth";

import auth from "./../auth/auth-helper";
import { makeStyles } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 9999,
  },
}));

const isActive = (history, path) => {
  if (history.location.pathname === path)
    return {
      color: "#efdcd5",
      borderBottom: "2px solid white",
    };
  else return { color: "#efdcd5" };
};

const Menu = withRouter(({ history, width }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography type="title" color="inherit">
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              MERN Mediastream
            </Link>
          </Typography>

          <div>
            {width !== "xs" && (
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: 5,
                }}
                to="/"
              >
                <IconButton aria-label="Home" style={isActive(history, "/")}>
                  <HomeIcon />
                </IconButton>
              </Link>
            )}
          </div>
          <div style={{ position: "absolute", right: "10px" }}>
            <span style={{ float: "right" }}>
              {!auth.isAuthenticated() && (
                <span>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/signup"
                  >
                    <Button style={isActive(history, "/signup")}>
                      Sign up
                    </Button>
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/signin"
                  >
                    <Button style={isActive(history, "/signin")}>
                      Sign In
                    </Button>
                  </Link>
                </span>
              )}
              {auth.isAuthenticated() && (
                <span>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/media/new"
                  >
                    <Button style={isActive(history, "/media/new")}>
                      <AddBoxIcon />
                      {width !== "xs" && "  Add Media"}
                    </Button>
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={"/user/" + auth.isAuthenticated().user._id}
                  >
                    <Button
                      style={isActive(
                        history,
                        "/user/" + auth.isAuthenticated().user._id
                      )}
                    >
                      <AccountCircleIcon />
                      {width !== "xs" && "My Profile"}
                    </Button>
                  </Link>
                  <Button
                    color="inherit"
                    onClick={() => {
                      auth.clearJWT(() => history.push("/"));
                    }}
                  >
                    <ExitToAppIcon />

                    {width !== "xs" && "SIGN OUT"}
                  </Button>
                </span>
              )}
            </span>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
});

export default withWidth()(Menu);
