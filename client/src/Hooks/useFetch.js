import { useState, useEffect } from "react";
import axios from "axios";

const useFetch =(url)=>{
    const [data, setData]= useState([]);
    const [loading, setLoading]= useState(false);
    const [error, setError]= useState(false);
    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try{
                const res = await axios.get(process.env.REACT_APP_API_URL+ url, {
                    headers :{
                        Authorization : "bearer " + process.env.REACT_APP_API_TOKEN,
                    },

                });
                console.log(res);
                setData(res.data.data)
            }
            catch(err){
                setError(true);
            }
            setLoading(false);
        }
        fetchData();
    }, [url]);

    return {data, loading, error}
}
export default useFetch;