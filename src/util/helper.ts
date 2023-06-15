import { fastivalInteface } from "../component/types";
export const sortedData = (data: any) => {
    let fastivalArray: any[] = [];
    const dataArray = data?.map((item: any) => {
        let fastival = item.name;
        const newArrayData = item?.bands?.map((band: any) => {
            return {
                ...band,
                fastival: fastival
            }
        })
        fastivalArray = [...fastivalArray, ...newArrayData]
        return null;
    })
    return fastivalArray.sort((a: any, b: any) => {
        let fa = a.recordLabel.toLowerCase(),
            fb = b.recordLabel.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    })
}

export const groupby = (key: string, array: any) => array.reduce((group: any, band: any) => (
    { ...group, [band[key]]: band[key] in group ? group[band[key]].concat(band) : [band] }), [])

export const fastivalFinalData = (data: any) => {

    const keyArray = Object.keys(data);
    const fastivalData = keyArray.map(item => {
        return {
            name: item,
            bands: data[item]
        }
    })
    return fastivalData
}