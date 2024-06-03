import React from 'react';
import { Link } from 'react-router-dom';
export default class Page extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<>
            <div className="error-area overlay">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="error-content">
                                <h1>404</h1>
                                <h2>Oops! Page Not Found!</h2>
                                <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
                                <div className="button">
                                    <Link to="/" className="btn">Back to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
        );
    }
}