import { storageService } from "../services/storage.service.js";

export const noteService={

}

const NOTES_KEY="notedDB";
const gNotes=[{}];

function query (){
    let notes=_loadFromStorage();
    if(!notes.length){
        notes=_createNotes()
        .then(res=>{
            notes=res
            gNotes=res
            _saveToStorage();
        })
    }
    return Promise.resolve(notes);
}

function _saveToStorage(notes=gNotes){
    storageService.saveToStorage(NOTES_KEY,notes)
}

function _loadFromStorage(){
    return storageService.loadFromStorage(NOTES_KEY);
}