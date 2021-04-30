import {$authHost,$host} from "./index"
import jwt_decode from 'jwt-decode'



export const createType =async (type) =>{
    const {data} = await $authHost.post('api/type',type)
 
    return data
}
export const fetchTypes =async (id) =>{
    const {data} = await $host.get('api/type',id)
     return data
}

export const createVersion =async (type) =>{
    const {data} = await $authHost.post('api/version',type)
 
    return data
}
export const fetchVersions =async () =>{
    const {data} = await $host.get('api/version')

     return data
}
export const createChip =async (type) =>{
    const {data} = await $authHost.post('api/chip',type)
 
    return data
}
export const fetchAllChip =async () =>{
    const {data} = await $host.get('api/chip')
     return data
}
export const fetchOneChip =async (id) =>{
    const {data} = await $host.get('api/chip/'+id)
     return data
}