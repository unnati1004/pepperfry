import axios from "axios";
import {useState,useEffect} from "react";
import { useParams } from "react-router";
// import styled from "styled-components";
export const Product = ()=>{

    const [data,setData] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`https://pepperfrybackend.herokuapp.com/armschair/${id}`).then((e)=>{
            setData(e.data);
            console.log(e.data);
        });
    },[]);

    return (
        <div>
            <div key={data.id}>
                <img src={data.image} alt="chair" />
                <h3>{data.name}</h3>
            </div>
        </div>
    )
}
