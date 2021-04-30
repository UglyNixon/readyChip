import {makeAutoObservable} from "mobx"

export default class ChipStore {

    constructor(){

        this._types=[
              
        ]
        this._versions = [
         
        ]
        this._chips =[
           
        ]
        this._selectedType={}
        this._selectedVersion={}
        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types=types
    }
    setVersions(versions) {
        this._versions=versions
    }
    setChips(chips) {
        this._chips=chips
    }
    setSelectedType(type){
        this._selectedType=type

    }
    setSelectedVersion(type){
        this._selectedVersion=type

    }
    get types(){
        return this._types
    }
    
    get versions(){
        return this._versions
    
    }
    get chips(){
        return this._chips
    }
    
    get selectedType(){
        return this._selectedType
    }
    get selectedVersion(){
        return this._selectedVersion
    }

}