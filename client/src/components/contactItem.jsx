import React from 'react'
const ContactItem=(props)=>(

	<div>
		<li>{"Name: "+props.contact.name}</li>
		<li>{"Phone: "+props.contact.phone}</li>
		<li>{"Email: "+props.contact.email}</li>
		<li>{"Facebook name: "+props.contact.facebook}</li>
		<li>{"Twitter name: "+props.contact.twitter}</li>
		<li>{"Google+ name: "+props.contact.googleplus}</li><br/>
	</div>

)
export default ContactItem;