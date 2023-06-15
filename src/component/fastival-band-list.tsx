import React from 'react'
import { fastivalBandProps } from './types'


function FastivalBandList({ bandName, fastival }: fastivalBandProps) {
    return (
        <>
            <dt>{bandName}</dt>
            <dd>{fastival}</dd>
        </>
    )
}
export default FastivalBandList