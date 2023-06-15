export interface fastivalInteface{
fastivals: Fastivals[] | null | undefined;
name:string,
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

export interface fastivaltype{
    name: string,
    bands: Band[] 
}
export type fastivalBandProps = {
    bandName: string,
    fastival: string


}