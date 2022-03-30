import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css"
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// import styled from "styled-components";
export const Products = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://pepperfrybackend.herokuapp.com/armschair").then((e) => {
            setData(e.data);
            console.log(e.data);
        });
    }, []);

    return (

        <div className="main">
            <div className="left">
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Sort by</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Relevance" control={<Radio />} label="Relevance" />
                        <FormControlLabel value="Highest Priced First" control={<Radio />} label="Highest Priced First" />
                        <FormControlLabel value="Lowest Priced First" control={<Radio />} label="Lowest Priced First" />
                        <FormControlLabel value="Fastest Shipping" control={<Radio />} label="Fastest Shipping" />
                        <FormControlLabel value="Newest" control={<Radio />} label="Newest" />
                    </RadioGroup>
                    </FormControl>
                  <hr />
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Discount</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="10% and Above" control={<Radio />} label="10% and Above" />
                        <FormControlLabel value="20% and Above" control={<Radio />} label="20% and Above" />
                        <FormControlLabel value="30% and Above" control={<Radio />} label="30% and Above" />
                        <FormControlLabel value="40% and Above" control={<Radio />} label="40% and Above" />
                    </RadioGroup>
                </FormControl>
                <hr />
            </div>
            <div className="right">
                {data.map((e) => {
                    return (
                        <div key={e._id} className="chair">
                            <Link to={`/armschair/:${e._id}`}>
                                <div key={e._id} className="overlay">
                                    <div>
                                    <img src={e.image} alt="chair" />
                                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                    </div>
                                    <h3>{e.name}</h3>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
