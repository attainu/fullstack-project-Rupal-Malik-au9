import React, { PureComponent } from 'react'
import './register.css';
import M from 'materialize-css'
export default class Register extends PureComponent {
    constructor(){

        super()
        this.state={
            name:"",
            password:"",
            email:"",
            confirmedPass:""
        }
        
    }

    nameHandler = (event)=>{
        this.setState({
            name: event.target.value
        })
    }

    emailHandler = (event)=>{
        this.setState({
            email:event.target.value
        })
    }

    passwordHandler = (event)=>{
        this.setState({
            password:event.target.value
        })
    }

    confirmPassHandler = (event)=>{
        this.setState({
            confirmedPass:event.target.value
        })
    }

    PostData =()=>{
        fetch("http://localhost:2000/signup",{
            method:"post",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:this.state.name,
                password:this.state.password,
                email:this.state.email,
                confirmedPass:this.state.confirmedPass
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html:data.error})
            }
        })
    }
    render() {
        const {name,password,email,confirmedPass} = this.state;
        // console.log(name,password,email,confirmedPass)
        return (
            <div>

                <div className="banner6 py-5">

                    <div className="row">
                        <div className="container">
                            <div className="col-lg-6 align-justify-center pr-4 pl-0 contact-form">
                                <div className="">
                                    <h2 className="mb-3 font-weight-light">Get Register For Free</h2>
                                    <h6 className="subtitle font-weight-normal">Be a part of Live Twice</h6>
                                    <form className="mt-3">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="full name" value={name} onChange={this.nameHandler} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="email" placeholder="email address" value={email} onChange={this.emailHandler} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="password" placeholder="password" value={password} onChange={this.passwordHandler}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="password" placeholder="confirm password" value={confirmedPass} onChange={this.confirmPassHandler}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12" style={{ "marginTop": "20px" }}>
                                                <button  className="btn btn-md btn-block btn-danger-gradiant text-white border-0" onClick={this.PostData}><span> Create Account</span></button>

                                            </div>
                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="col-lg-12 text-center mt-4">
                                            <h6 className="font-weight-normal">Signup with Social Accounts</h6>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <a href="#" className="btn btn-block bg-facebook text-white mt-3">Facebook</a>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <a href="#" className="btn btn-block bg-twitter text-white mt-3">Twitter</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 text-center mt-4">
                                            Already have an account? <a href="#" className="text-danger">Sign In</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className="col-lg-6 right-image pl-3" src='https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/form/3.jpg' alt="register-image" />

                    </div>
                </div>
            </div>
        )
    }
}
