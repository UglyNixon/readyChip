import {$host} from './index';


 export const createBrand = async (brand) => {
        const {data} = await $host.post('api/brand', brand)
        return data
 }
 export const fetchBrands = async () => {
        const {data} = await $host.get('api/brand')
        return data
}
