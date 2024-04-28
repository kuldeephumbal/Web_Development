import React from 'react';
export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<>
            <footer className="footer overlay">
                {/* Start Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="content">
                                        <p className="copyright-text">Designed by <a href="https://graygrids.com/" rel="nofollow" 
                                         target="_blank">Kuldeep Humbal</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <ul className="extra-link">
                                        <li><a href="javascript:void(0)">Terms &amp; Conditions</a></li>
                                        <li><a href="javascript:void(0)">FAQ</a></li>
                                        <li><a href="javascript:void(0)">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Footer Middle */}
            </footer>


        </>);
    }
}