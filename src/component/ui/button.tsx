import React from 'react';
export  type ButtonPropsType={
    label: string
}
const Button=({label}:ButtonPropsType)=>{
    return (
        <>
        <button type="button" className="btn btn-outline-primary">{label}</button>
        </>
    )
}

export default Button