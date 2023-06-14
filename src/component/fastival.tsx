import React, { useState, useEffect } from 'react'
import FastivalBandList from './fastival-band-list'
import { fastivalInteface } from './types';
import { AppRoute } from './app-route';
import http from './instance';
import { sortedData } from '../util/helper';

function Fastivals() {
    const [fastivals, setFastivals] = useState<fastivalInteface[] | null | undefined>()
    const [error, setError] = useState<string>('')
    const url: string = AppRoute.festivals_url;
    useEffect(() => {
          http(url, "GET")?.then(res => {
           console.log(res.data)
            return setFastivals(res.data)
        }).catch(error => {
            setFastivals(null)
            setError("Something Went wrong")
        });
       
    }, [url])

    if (error) {
        return <h4>{error}</h4>
    }

    return (<>
        <h4>Energy Australia</h4>
        {
            fastivals && (fastivals?.map((fastival, index) => {
                return (<React.Fragment key={index}>
                    <h4>{fastival.name}</h4>
                    <dl>
                        {fastival?.bands?.map((band, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <FastivalBandList band={band} />
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