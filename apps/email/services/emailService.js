// import { utilService } from '../services/utilService.js'
// import { storageService } from "../services/storage.service.js";
const EMAILS_KEY = "emailDB";

export const emailService ={
    query
}

const loggedinUser = {
 email: 'user@appsus.com',
 fullname: 'Mahatma Appsus'
}

const emails_list =[ {
id: _makeId(),
subject: 'Miss you!',
body: 'Would love to catch up sometimes',
isRead: false,
sentAt : 1551133930594,
to: 'momo@momo.com',
sender:'Pozi'
},{
id: _makeId(),
subject: 'hey you!',
body: 'Would love to catch up sometimes',
isRead: false,
sentAt : 1551133960594,
to: 'momo@momo.com',
sender:'osama'
}
]

function query(filterBy) {
    let emails = _loadFromStorage(EMAILS_KEY)
    if (!emails) {
        emails = emails_list
       _saveToStorage(EMAILS_KEY,emails)
    }

    if (filterBy) {
        //filter
    }

    return Promise.resolve(emails)
}


function _saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function _loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}

function _makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}