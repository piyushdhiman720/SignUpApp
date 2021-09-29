import React, { Component } from 'react'

export default class Forgot extends Component {
    render() {
        return (
            <div className="container">
            <h1 className="display-3 text-center my-5">Forgot Password</h1>
            <div className="row">
                <div className="col-md-6 shadow mx-auto p-5">
                    <form>
                        <div className="form-group mt-2">
                            <input type="text" placeholder="NAME" className="form-control"></input>
                        </div>
                        <div className="form-group mt-2">
                            <input type="email" placeholder="EMAIL" className="form-control"></input>
                        </div>
                        <div className="form-group mt-2">
                            <input type="number" placeholder="NUMBER" className="form-control"></input>
                        </div>
                        <div className="form-group mt-2">
                            <input type="submit" className="btn btn-dark form-control"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}
