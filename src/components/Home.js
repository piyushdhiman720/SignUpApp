import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
            <div className="container">
                <div className="text-end m-5 ms-50 w-50">
                    <Link to="/Facebook" className="btn btn-outline-dark">
                        Signup on Facebook
                    </Link>
                </div>
                <div className="text-end m-5 ms-50 w-50">
                    <Link to="/Google" className="btn btn-outline-dark">
                        Signup on Google
                    </Link>
                </div>
            </div>
    )
}

export default Home;