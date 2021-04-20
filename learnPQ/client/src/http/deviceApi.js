import {$authHost,$host} from './index';

import jwt_decode from 'jwt-decode'

 export const createType = async (type) => {
       console.log(type)
        const {data} = await $authHost.post('api/type',type)
        return data
 }

 export const fetchTypes = async () => {
        const {data} = await $host.get('api/type')
        return data
}
export const createDevice = async (name) => {
       const {data} = await $authHost.post('api/device', name)
       return data
}


export const fetchDevice = async () => {
       const {data} = await $host.get('api/device')
       return data
}
export const fetchOneDevice = async (id) => {
       const {data} = await $host.get('api/device/' +id)
       return data
}

