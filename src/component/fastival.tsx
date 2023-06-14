import React, { useState, useEffect } from 'react'
import FastivalBandList from './fastival-band-list'
import { fastivalInteface } from './types';
import { AppRoute } from './app-route';
import http from './instance';

function Fastivals() {
    const [fastivals, setFastivals] = useState<fastivalInteface[] | null | undefined>()
    const url: string = AppRoute.festivals_url;
    useEffect(() => {
        http(url, "GET")?.then(res => setFastivals(res.data)).catch(error => console.log(error))
    }, [])
 
    return (<>
        {
          fastivals && ( fastivals?.map((fastival, index) => {
                return (<React.Fragment key={index}>
                    <h4>Record Label {index + 1}</h4>
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