import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../static/Style';
import Router from 'next/router';


class Layout extends Component {

    constructor(props) {
        super (props);
    }

    render () {

        if (!this.props.login) {
    
            Router.push('/');
            return (<div></div>);

        } else {

            return (<div>
                <Head>
                    <title>{this.props.title}</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                </Head>
                {style}
                <Header title={this.props.title} />
                    <div >
                        {this.props.children}
                    </div>
                <Footer footer="copyright TEST-Taro." />
            </div>);
    
        }

    }
}

Layout = connect((state) => state)(Layout);
export default Layout;