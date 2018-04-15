import React from 'react'

const ContactItem=(props)=>(

	<div>
	{"Name: "+props.contact.name}
	{"Phone: "+props.contact.phone}
	{"Email: "+props.contact.email}
	{"Facebook name: "+props.contact.facebook}
	{"Twitter name: "+props.contact.twitter}
	{"Google+ name: "+props.contact.googleplus}
	</div>

)
export default ContactItem;