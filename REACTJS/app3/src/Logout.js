import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
export default class Logout extends React.Component 
{
    constructor(props) {
        super(props);
    }
        render(){
            return (<>
            <Menu />
            <Footer />
            </>
        );
        }
}