import { React , useEffect, useState } from "react";

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [Pending, setPending] = useState(true);
    const [error , setError] = useState(null);

    //for useEffect cleanup
    const abortContr = new AbortController();

    useEffect(() => {
        setTimeout(() => {
            fetch(url , { signal:abortContr.signal })
                .then(res => {
                    if(!res.ok){
                        throw Error("Can't fetch data for this resource");
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setPending(false);
                })
                .catch(err => {
                    if(err.name === 'AbortError'){
                        console.log("Abort ERROR");
                    }else{
                        setPending(false);
                        setError(err.message);
                    }
                })
        } , 500)

        return () => {
            abortContr.abort();
        }
    }, [url]);

    return {data , Pending , error};
}

export default useFetch;