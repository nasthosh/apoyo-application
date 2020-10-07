import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getDisorders } from "../api/disorderApi";
import DisorderList from "./DisorderList";
import { Link } from "react-router-dom";
import AboutPage from "./AboutPage";


function HomePage() {

    const [disorders, setDisorders] = useState([]);

    useEffect(() => {
        getDisorders().then((_disorders) => setDisorders(_disorders));
    }, []);

    return (
        <>

            {" "}
            <h2> Disorders </h2>
            <img src="https://cdn.pixabay.com/photo/2019/05/27/07/26/mental-health-4232031_960_720.jpg" className="container-fluid" />
            <DisorderList disorders={disorders} />
        </>
    );
}

export default HomePage;
