import React from 'react'
import Contact from './Contact'

const ContactList =({contacts}) => {
  console.log(contacts)
  return (
    <div>
        {
            contacts.map((el) => <Contact key={el._id} contact={el} />)
        }
      
    </div>
  )
}

export default ContactList
