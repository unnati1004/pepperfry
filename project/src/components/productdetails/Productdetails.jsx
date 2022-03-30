import axios from "axios";
import {useState,useEffect} from "react";
import { useParams } from "react-router";
// import styled from "styled-components";
export const ProductDetail = ()=>{

    const [data,setData] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`https://pepperfrybackend.herokuapp.com/armschair/${id}`).then((e)=>{
            setData(e.data);
            console.log(e);
        });
    },[id]);

    return (
            <div key={data.id}>
                <img src={data.image} alt="chair" />
                <h3>{data.name}</h3>
            </div>
    )
}
