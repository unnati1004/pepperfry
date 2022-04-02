import axios from "axios";
import {useState,useEffect} from "react";

export const Product = ()=>{

    const [data,setData] = useState([]);

    axios.get("https://pepperfrybackend.herokuapp.com/armschair").then((e)=>{
        setData(e.data);
    })
}
