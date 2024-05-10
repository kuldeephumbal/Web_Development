import React from 'react';
import { withCookies } from 'react-cookie';
class Logout extends React.Component 
{
    constructor(props) {
        super(props);
        const { cookies } = this.props; 
        cookies.remove("userid");
        cookies.remove("serviceid");
        cookies.remove("email");
    }
        render(){
            window.location = "/";
            return (<></>
        );
        }
}
export default withCookies(Logout);