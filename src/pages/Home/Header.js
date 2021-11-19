import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import {
  CallToAction,
  MonetizationOn,
  ShutterSpeed,
  YouTube,
} from "@material-ui/icons";
import Pulse from "react-reveal/Pulse";

const useStyles = makeStyles((theme) => ({
  spacing: {
    paddingTop: 130,

    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
      textAlign: "center",
    },
  },
  circle: {
    width: 7,
    height: 7,
    padding: 5,
    margin: 6,
    borderRadius: "50%",
    backgroundColor: theme.palette.pbr.primary,
  },
  header: {
    height: "80vh",
    width: "auto",
    background: `linear-gradient(0deg,
      rgba(0, 0, 2, 0.6),
      rgba(0, 0, 233, 0.1)
    ),
    url("images/cover.png") no-repeat center center
      fixed`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.up("sm")]: {
      height: "85vh",
    },
  },
  notice: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingBottom: 15,
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    width: "auto",
    textAlign: "center",
    fontSize: "52px",

    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    margin: "0px 0px 12px",
    padding: "0px 12px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
    },
  },
  subheading: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 16,
    fontWeight: 400,
    fontColor: theme.palette.pbr.textLight,
    marginTop: 25,
  },
  button: {
    borderRadius: "50px",
    background: `linear-gradient(to bottom,#AC1708, #991206)`,
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    marginTop: 15,
    color: "#ffffff",
    padding: "15px 30px 15px 30px",
    fontWeight: 600,
    fontSize: 14,
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
      padding: "10px 20px 10px 20px",
    },
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: "#ffffff",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Fragment>
      <section>
        {" "}
        <div className={classes.header}>
          <div className={classes.spacing}>
            <div className="d-flex flex-row justify-content-center mt-5">
              {/* <div className={classes.circle} />
              <p className={classes.notice}>PBR Launchpad starting soon.</p> */}
            </div>
            <Pulse>
              <h1 className={classes.heading}>
                A MultiChain Defi
                <br />
                <span style={{ fontSize: 100 }}>Metaverse</span>
              </h1>
            </Pulse>
            <p className={classes.subheading}>
              <strong>Powered by </strong>{" "}
              <div className={classes.title} variant="h6" noWrap>
                <img
                  src="https://www.freelogovectors.net/wp-content/uploads/2021/10/polygon_token_logo-freelogovectors.net_.png"
                  alt="logo"
                  height="60px"
                />
              </div>
            </p>
            <div className="text-center mt-3">
              <a
                href="https://youtu.be/xYnK5nbwkkM"
                style={{ textDecoration: "none", padding: 5 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  <YouTube className={classes.icon} /> Watch Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
