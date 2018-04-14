import React from 'react'
import ContactItem from './contactItem.jsx'

const ContactList=(props)=>(
<div>
<ul>
{props.contacts.map((contact)=>
	<ContactItem
	 key={contact._id}
	 contact={contact} />
)}
</ul>
</div>
)


export default ContactList;