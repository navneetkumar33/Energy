import { fastivalInteface } from "../component/types";
export const sortedData = (data: any) => {
    let sorteddata;
    try {
        sorteddata = data?.map(
            (data: any) => {
                const sortbands = data.bands.sort((a: any, b: any) => {
                    let fa = a.name.toLowerCase(),
                        fb = b.name.toLowerCase();

                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                });
                return {
                    ...data,
                    bands: sortbands
                }
            }

        )
    } catch (error) { console.log(error) }

    return sorteddata
}