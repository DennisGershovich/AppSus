
const EMAILS_KEY = "emailDB";

export const emailService ={
    query,
    getEmail,
    getUnreadEmailsCount,
    upDateEmailRead
}

const loggedinUser = {
 email: 'user@appsus.com',
 fullname: 'Mahatma Appsus'
}

let emails_list =[
{
id: _makeId(),
subject: 'Love you!',
body: 'Would love to love up sometimes',
isRead: false,
sentAt :  _convertToDate(15511335555594),
to: 'momo@momo.com',
sender:'Suzi'
},
{
id: _makeId(),
subject: 'Miss you!',
body: 'Would love to catch up sometimes',
isRead: false,
sentAt :  _convertToDate(1551133960594),
to: 'momo@momo.com',
sender:'Pozi'
},
{
id: _makeId(),
subject: 'hey you!',
body: 'Would love to catch up sometimes',
isRead: true,
sentAt : _convertToDate(1551443960594),
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
        console.log('filter by!')
    }
    emails_list = emails
    let unReadEmails = getUnreadEmailsCount(emails)
    return Promise.resolve(emails,unReadEmails)
}

function getUnreadEmailsCount(emails){
    return  emails.filter(email => !email.isRead).length
}

function getEmail(emailId){
    let emails = _loadFromStorage(EMAILS_KEY)
    return emails.find(email => email.id === emailId)
}


function upDateEmailRead(emailId){
    let emails = _loadFromStorage(EMAILS_KEY)
    let emailIdx = emails.findIndex(email => email.id === emailId )
    emails[emailIdx].isRead = true
    _saveToStorage(EMAILS_KEY,emails)
    
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

function _convertToDate(datetime){
    const date = new Date(datetime);
    const options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
    };

    return date.toLocaleDateString('he', options);
}
