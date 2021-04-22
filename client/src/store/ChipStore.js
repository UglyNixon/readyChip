import {makeAutoObservable} from "mobx"

export default class ChipStore {

    constructor(){

        this._types=[
              
        ]
        this._versions = [
            {id:1,name:'124'},
            {id:2,name:'126'},
            {id:3,name:'2v_5'},
            {id:4,name:'2v_6'},
        ]
        this._chips =[
            {id:1,series:'50292',coming:20000,consum:18000,img:'https://krasn.diamarka.com/upload/iblock/106/10695dbf27334116c90636b66796be8b.jpg'},
            {id:2,series:'51347',coming:20000,consum:18000,img:'https://krasn.diamarka.com/upload/iblock/106/10695dbf27334116c90636b66796be8b.jpg'},
            {id:3,series:'51896',coming:20000,consum:18000,img:'https://krasn.diamarka.com/upload/iblock/106/10695dbf27334116c90636b66796be8b.jpg'},
            {id:4,series:'52145',coming:20000,consum:18000,img:'https://krasn.diamarka.com/upload/iblock/106/10695dbf27334116c90636b66796be8b.jpg'},
            {id:5,series:'52437',coming:20000,consum:18000,img:'https://krasn.diamarka.com/upload/iblock/106/10695dbf27334116c90636b66796be8b.jpg'},
            {id:6,series:'57202',coming:20000,consum:18000,img:'https://krasn.diamarka.com/upload/iblock/106/10695dbf27334116c90636b66796be8b.jpg'},
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
    setSelectedType(ver){
        this._selectedType=ver

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