import React ,{useEffect, useState}from 'react'


const ProductList=()=>{
    const [referesh, setReferesh]=useState(false)
    const [data, setData]=useState();

    const handleClick=()=>{
        setReferesh(!referesh)
    }
    useEffect(()=>{
        axios.get('............')
        .then(res=>setData(res.data))

    },[referesh])
    return(
        <>
        <button onClick={handleClick}>Click to Refresh</button>
        </>
    )
}

export default ProductList