
const EMAILS_KEY = "emailDB";
const SENT_EMAILS_KEY = 'sent_emailDB'

export const emailService ={
    query,
    getEmail,
    getUnreadEmailsCount,
    upDateEmailRead,
    saveEmail,
    removeEmail,
    convertToDate,
    sortEmails,
    getSentEmails,
    trimEmailBodyMessage,
    removeSentEmailFromStorage,
    starEmail

}

const loggedinUser = {
 email: 'user@appsus.com',
 fullname: 'Mahatma Appsus'
}

let emails_list =[
{
id: _makeId(),
subject: 'hello',
body: 'for now. to burn tuned Where ten . was Bro tuned it and the story each time . happens it The sky ',
isRead: false,
sentAt :  1591733960574,
to: 'momo@momo.com',
sender:'PayBox',
isStarred:false
},
{
id: _makeId(),
subject: 'meeting',
body: 'Would love to catch up sometimes',
isRead: false,
sentAt :  1601133960594,
to: 'nomi@gmail.com',
sender:'Nomi',
isStarred:true
},
{
id: _makeId(),
subject: 'Welcome',
body: 'Ta-da! Youve joined your first Slack workspace and we couldnt be more delighted. Here are your account details, along with some tips to help you get started.',
isRead: false,
sentAt : 1581443960594,
to: 'slack@slack.com',
sender:'slack',
isStarred:false
},
{
id: _makeId(),
subject: 'trade',
body: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
isRead: true,
sentAt : 1611443960594,
to: 'trade@trade.com',
sender:'stocks',
isStarred:false
},
{
id: _makeId(),
subject: 'shalom',
body: 'Would love to catch up as soon ',
isRead: true,
sentAt : 1551443960594,
to: 'tm1123@gmail.com',
sender:'Thomas',
isStarred:false
}
,
{
id: _makeId(),
subject: 'Maps',
body: 'Welcome to Google Maps Platform Whether youre starting fresh or building enterprise services, with over 15 APIs and ',
isRead: true,
sentAt : 1551443960594,
to: 'google@gmail.com',
sender:'google',
isStarred:false
}
]

const sentEmails =[]

const starredEmails = []

function query(filterBy) {
    let emails = _loadFromStorage(EMAILS_KEY)
    if (!emails) {
        emails = emails_list
       _saveToStorage(EMAILS_KEY,emails)
    }
    if (filterBy) {   
        if(filterBy.content){
         emails = emails.filter(email => {
         return email.subject.toLowerCase().includes(filterBy.content) 
            })
        }
        if(filterBy.readState){
         if(filterBy.readState === 'all'){ 
            let unReadEmails = getUnreadEmailsCount(emails)
            return Promise.resolve(emails,unReadEmails)}
        }
        if(filterBy.readState === 'true'){
            emails = emails.filter(email => {
            return email.isRead === true
            })
        }
        if(filterBy.readState === 'false'){
            emails = emails.filter(email => {
            return email.isRead === false
            })
        }
    }
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

function sortEmails(sortBy){
    let emails = _loadFromStorage(EMAILS_KEY)
    switch(sortBy){
        case 'date':
        emails.sort((a, b) =>  a.sentAt - b.sentAt)
         _saveToStorage(EMAILS_KEY,emails)
        break

        case 'title':
        emails.sort((a, b) =>{
        if (a.subject < b.subject) {return -1;}
        if (b.subject > b.subject) {return 1;}
         return 0;
        })
        _saveToStorage(EMAILS_KEY,emails)
        break
    }
   
}

function saveEmail(to,subject,content){
    let sentEmail = _createEmail(to,subject,content)
    sentEmails.push(sentEmail)
   _saveToStorage(SENT_EMAILS_KEY,sentEmails)  
}

function removeEmail(emailId) {
    let emails = _loadFromStorage(EMAILS_KEY)
    if(!emails) return
    emails = emails.filter(email => email.id !== emailId)
    _saveToStorage(EMAILS_KEY,emails)
}

function getSentEmails(){
    return _loadFromStorage(SENT_EMAILS_KEY)
}

function removeSentEmailFromStorage(emailId){
    let sentEmails = _loadFromStorage(SENT_EMAILS_KEY) 
    let emailIdx = sentEmails.findIndex(email => email.id === emailId)
    sentEmails.splice(emailIdx,1)
    _saveToStorage(SENT_EMAILS_KEY,sentEmails)
}

function trimEmailBodyMessage (messageStr) {
    if(messageStr.length > 30){
        return messageStr.slice(0,30) + '..'
    }else{
        return messageStr
    } 
}

function starEmail(email){
    let emails = _loadFromStorage(EMAILS_KEY)
    //get the wmail
     let emailIdx = emails.findIndex(mail => mail.id === email.id )
    //chamge the star to true or false 
    emails[emailIdx].isStarred = !emails[emailIdx].isStarred 
    //save 
    _saveToStorage(EMAILS_KEY,emails)
    //rerender class

}

function _createEmail(to,subject,content){
    return {
    id: _makeId(),
    subject:subject,
    body:content,
    sentAt : new Date().toLocaleDateString('he'),
    to:to,
    sender:loggedinUser.fullname
    }
    
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

function convertToDate(datetime){
    const date = new Date(datetime)
    const options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
    }
    return date.toLocaleDateString('he', options)
}
