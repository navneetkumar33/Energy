import React, { useState, useEffect } from 'react'
import FastivalBandList from './fastival-band-list'
import { fastivaltype } from './types';
import { AppRoute } from './app-route';
import http from './instance';
import { sortedData, groupby , fastivalFinalData} from '../util/helper';
import { fastivalsData } from './fastival-data';

function Fastivals() {
    const [fastivals, setFastivals] = useState<fastivaltype[]| null | undefined>()
    const [error, setError] = useState<string>('')
    const url: string = AppRoute.festivals_url;
    useEffect(() => {
            http(url, "GET")?.then(res => {
                const data=sortedData(fastivalsData);
                const groupData=groupby('recordLabel', data)
                const fastivalFinaldata=fastivalFinalData(groupData)
            return setFastivals(fastivalFinaldata)
               }).catch(error => {
            setFastivals(null)
            setError("Something Went wrong")
        });
     }, [url])
   console.log(fastivals)
    if (error) {
        return <h4>{error}</h4>
    }
    return (<>
        <h4>Energy Australia</h4>
        {
            fastivals && (fastivals?.map((fastival, index) => {
                return (<React.Fragment key={index}>
                    <h4><span>{fastival.name?fastival.name: ""}</span></h4>
                    <dl>
                        {fastival?.bands?.map((band:any, index: number) => {
                            return (
                                <React.Fragment key={index}>
                                    <FastivalBandList bandName={band.name} fastival={band.fastival} />
                                </React.Fragment>
                            )
                        })}
                    </dl>
                </React.Fragment>)
            }))
        }
    </>
    )
}


export default Fastivals