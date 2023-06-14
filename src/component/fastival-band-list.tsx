import React from 'react'
import { fastivalBandProps } from './types'


function FastivalBandList({ band }: fastivalBandProps) {
    return (
        <>
            <dt> {band.name}</dt>
            <dd>{band.recordLabel}</dd>
        </>
    )
}
export default FastivalBandList