export interface fastivalInteface{
fastivals: Fastivals[] | null | undefined;
bands: Band[];
}

export interface Band{
    name: string,
    recordLabel: string,
}
export interface Fastivals{
    name: string,
    bands: Band[]    
}

export type fastivalBandProps = {
    band: {
        name: string,
        recordLabel: string,
    }

}