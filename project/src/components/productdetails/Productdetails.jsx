import axios from "axios";
import {useState,useEffect} from "react";
import { useParams } from "react-router";
import "./Productdetails.css"
import Checkbox from '@mui/material/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// import styled from "styled-components";
export const ProductDetail = ()=>{

    const [data,setData] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`https://pepperfrybackend.herokuapp.com/armschair/${id}`).then((e)=>{
            setData(e.data);
            // console.log(e.data);
        });
    },[id]);

    return (
            <div key={data.id} className="main">
                <div className="image">
                <img src={data.image} alt="chair" />
                </div>
               <div className="details">
               <h2 className="font">{data.name}</h2>
               <h3 className="made">{data.made_by}</h3>
               <h2>{data.price}</h2>
               <div>
               <Checkbox {...label} className="icon" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
               </div>
               </div>
               <div>
                   <button>ADD TO CART</button>
                   <button>BUY NOW</button>
               </div>
            </div>
    )
}
