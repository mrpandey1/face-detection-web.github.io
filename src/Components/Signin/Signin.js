import React from 'react';
class Signin extends React.Component {
    constructor(){
        super();
        this.state={
            signInEmail:'',
            signInPassword:''
        }
    }
    onEmailChange=(event)=>{
        this.setState({signInEmail:event.target.value})
    }
    onPasswordChange=(event)=>{
        this.setState({signInPassword:event.target.value})
    }
    onSubmitSignIn=()=>{
        fetch('http://localhost:3000/signin',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:this.state.signInEmail,
                password:this.state.password
            })
        })
        this.props.onRouteChange('home');
    } 
    render(){
        // const {onRouteChange}=this.props;
        return(
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <form className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3"> 
                    <label className="db fw6 lh-copy f6" htmlfor="email-address">Email</label>
                    <input 
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="email" 
                    name="email-address"
                    onChange={this.onEmailChange}
                    id="email-address"/>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlfor="password">Password</label>
                    <input 
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password" 
                    name="password"  
                    onChange={this.onPasswordChange}
                    id="password"/>
                </div>
                </fieldset>
                <div className="">
                <input 
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                 type="submit"
                 onClick={this.onSubmitSignIn} 
                 value="Sign in"/>
                </div>
                <div className="lh-copy mt3">
                <p onClick={()=>this.props.onRouteChange('register')}  className="f6 link dim black db pointer">Sign up</p>
                </div>
                </form>
            </main>
        </article>
        );
    }
}
 
export default Signin; 