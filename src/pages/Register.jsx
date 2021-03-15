import React, { PureComponent } from 'react'
import './register.css';
export default class Register extends PureComponent {
    render() {
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
                                                    <input className="form-control" type="text" placeholder="full name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="email" placeholder="email address" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="password" placeholder="password" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="password" placeholder="confirm password" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12" style={{ "marginTop": "20px" }}>
                                                <button type="submit" className="btn btn-md btn-block btn-danger-gradiant text-white border-0"><span> Create Account</span></button>

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
