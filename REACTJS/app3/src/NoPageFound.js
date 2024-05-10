import React from 'react';
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
                                    <a href="index.html" className="btn">Back to Home</a>
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