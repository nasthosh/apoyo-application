import React, {useState} from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Redirect } from "react-router-dom";
import AboutPage from "./AboutPage";

function DisorderList(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            overflow: "hidden",
            backgroundColor: theme.palette.background.paper,
            padding: "150px",
        },
        titleBar: {
            background:
                "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
        },
        icon: {
            color: "rgba(255, 255, 255, 0.54)",
        },
    }));
    const classes = useStyles();
    const [isClicked,setIsClicked] = useState(true);
    if(!isClicked){
        return <Redirect to="/about" />
    }

    return (
        <div className={classes.root}>
            <GridList cols={3}>
                {props.disorders.map((disorder) => {
                    return (
                        <GridListTile key={disorder.id}>
                            <img src={disorder.disorder_image} />
                            <GridListTileBar
                                title={disorder.disorder_name}
                                subtitle={disorder.disorder_short_desc}
                                actionIcon={
                                    <IconButton
                                        aria-label={`info about ${disorder.disorder_name}`}
                                        onClick={() => setIsClicked(false)}
                                        className={classes.icon}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    );
                })}
            </GridList>
        </div>
    );
}
export default DisorderList;
