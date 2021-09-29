import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Facebook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: "",
            lName: "",
            cName: "",
            mNumber: "",
            gName: "",
            eMail : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        alert(this.state.fName + " " + this.state.lName + " Your Registration is successfully Done..");
        event.preventDefault();
    };



    render() {
        return (
            <>
                <div className="head-R">
                    <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" al="fb-logo" />
                </div>
                
                    <form  className="form frm-w bg-info p-4 m-auto mb-5">
                        <div>
                            <label className="form-label label mt-3">First Name</label>
                            <input className='form-control' placeholder='YOUR NAME' type="text" name="fName" value={this.state.fName} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label className="form-label mt-3">Last Name</label>
                            <input className='form-control' placeholder='YOUR LAST NAME' type="text" name="lName" value={this.state.lName} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label className="form-label mt-3">City Name</label>
                            <input className='form-control' placeholder='YOUR CITY NAME' type="text" name="cName" value={this.state.cName} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label className="form-label mt-3">City Name</label>
                            <input className='form-control' placeholder='YOUR CITY NAME' type="text" name="cName" value={this.state.cName} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label className="form-label mt-3">GENDER</label><br/>
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>Please select</option>
                                <option type="radio" name="gName" value="male" onChange={this.handleChange} >Male</option>
                                <option type="radio" name="gName" value="female" onChange={this.handleChange}>Female</option>
                                <option type="radio" name="gName" value="other" onChange={this.handleChange}>Other</option>
                            </select>
                        </div>
                        <div>
                        <label className="form-label mt-3">Mobile number</label>
                            <input className='form-control' placeholder='YOUR NUMBER' type="text" name="mNumber" value={this.state.mNumber} onChange={this.handleChange} />
                        </div>
                        <div>
                        <div class="form-check  mt-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">remember me</label>
                        </div>
                            <input onClick={this.handleSubmit} className="btn btn-success" type="Submit" value="Submit" />                            
                        </div>
                        <div>
                            <label className="form-label label mt-5">If you have an Account please click on </label>
                            <a href="https://www.facebook.com/" target="_blank" className="btn btn-light ms-3">Login</a>
                        </div>
                        <div className="text-end m-5 ms-50 w-50">
                            <Link to="/Forgot" className="btn btn-outline-dark">
                                Forgot Password
                            </Link>
                        </div>                    
                    </form>
                
            </>
        );
    };
};

export default Facebook;