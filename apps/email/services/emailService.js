import { utilService } from '../services/utilService'

export const emailService ={

}

const loggedinUser = {
 email: 'user@appsus.com',
 fullname: 'Mahatma Appsus'
}

const emails =[ {
id: utilService.makeId,
subject: 'Miss you!',
body: 'Would love to catch up sometimes',
isRead: false,
sentAt : 1551133930594,
to: 'momo@momo.com'
}
]


