import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css"
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
        
        <div>
            <div className="left">
                <div >
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value=""
                                // checked={}
                                // onChange={}
                            />
                            Male
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value=""
                                // checked={}
                                // onChange={}
                            />
                            Female
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value=""
                                // checked={}
                                // onChange={}
                            />
                            Other
                        </label>
                    </div>
                </div>
                <div>
                {data.map((e) => {
                    return (
                        <div key={e._id} className="right">
                            <Link to={`/armschair/:${e._id}`}>
                                <div key={e._id}>
                                    <img src={e.image} alt="chair" />
                                    <h3>{e.name}</h3>
                                </div>
                            </Link>
                        </div>
                    )
                })}
                {/* </div> */}
            </div>
            </div>
            </div>
            )
}
