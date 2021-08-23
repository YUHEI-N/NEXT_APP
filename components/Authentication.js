import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from '../static/Style';
import Router from 'next/router';
import firebase from 'firebase';
import { Button } from 'react-bootstrap';


class Authentication extends Component {

    constructor (props) {
        super(props);
        this.login = this.login.bind(this);
    }

    // ログイン処理
    login() {
        
        let provider = new firebase.auth.GoogleAuthProvider    
        firebase.auth().signInWithPopup(provider)
            .then((result)=>{
                this.props.dispatch({
                    type:'UPDATE_USER',
                    value:{
                        login:true,
                        username: result.user.displayName,
                        email: result.user.email
                    }
                });
                Router.push('/information');
            });
    }

    render () {
        return (
            <div className="login-div" >
                {style}
                <Button variant="outline-info" className="login-btn" onClick={ this.login } >ログイン</Button>
            </div>
        );
    }
}

Authentication = connect((state)=>state)(Authentication);
export default Authentication;