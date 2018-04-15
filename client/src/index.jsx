import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ContactList from './components/contact-list.jsx';


class App extends React.Component{
	constructor(props){
		super(props)

		this.state={
			contacts:[],
			name: '',
		    phone:'',
		    email: '',
		    facebook:'',
		    twitter:'',
		    googleplus:''
		}
		this.addContact=this.addContact.bind(this)
		this.deleteAll=this.deleteAll.bind(this)
		this.updateName=this.updateName.bind(this)
		this.updatePhone=this.updatePhone.bind(this)
		this.updateEmail=this.updateEmail.bind(this)
		this.updateFacebook=this.updateFacebook.bind(this)
		this.updateTwitter=this.updateTwitter.bind(this)
		this.updateGoogle=this.updateGoogle.bind(this)

	}
	deleteAll(){
		$.ajax({
      type: "PUT",
      url: '/contacts',
      data: {},
      success: function(data){
        console.log('success')
      }
     });

			var that=this;

		$.ajax({
      type: "GET",
      url: '/contacts',
      success: function(data){
      	that.setState({contacts:data})
        console.log(that.state.contacts)
      }
     });		
	}
	addContact(){
		$.ajax({
      type: "POST",
      url: '/',
      data: {
        name:this.state.name,
		phone:this.state.phone,
		    email:this.state.email,
		    facebook:this.state.facebook,
		    twitter:this.state.twitter,
		    googleplus:this.state.googleplus
      },
      success: function(data){
        console.log('success')
      }
     });

		var that=this;

		$.ajax({
      type: "GET",
      url: '/contacts',
      success: function(data){
      	that.setState({contacts:data})
        console.log(that.state.contacts)
      }
     });
	}

	updateName(event){
		this.setState({
			name:event.target.value})
	}
	updatePhone(event){
		this.setState({
			phone:event.target.value})
	}
	updateEmail(event){
		this.setState({
			email:event.target.value})
	}
	updateFacebook(event){
		this.setState({
			facebook:event.target.value})
	}
	updateTwitter(event){
		this.setState({
			twitter:event.target.value})
	}
	updateGoogle(event){
		this.setState({
			googleplus:event.target.value})
	}
	render(){

		return(
			<div>
			<div>
		      <h4>Enter a contact info:</h4>
		    	<form>
		      <label>Name: <input value={this.state.name} onChange={this.updateName}/></label><br/>      
		      <label>Phone: <input value={this.state.phone} onChange={this.updatePhone}/></label><br/>       
		      <label>Email: <input value={this.state.email} onChange={this.updateEmail}/></label><br/>       
		      <label>Facebook name: <input value={this.state.facebook} onChange={this.updateFacebook}/></label> <br/>      
		      <label>Twitter name: <input value={this.state.twitter} onChange={this.updateTwitter}/></label><br/>       
		      <label>Google+ :<input value={this.state.googleplus} onChange={this.updateGoogle}/></label>       
		    </form> 
	
			<button onClick={this.addContact}>Create Contact</button>
			<button onClick={this.deleteAll}>Delete all contacts</button>
			<p>{"You have " + this.state.contacts.length + " contacts."}</p>
			</div>
			<ContactList contacts={this.state.contacts}/>
   			 </div>
			
			)
	}
}


ReactDOM.render(<App />,document.getElementById('app'))


