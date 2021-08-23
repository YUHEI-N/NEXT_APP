import React, {Component } from 'react';
import { Nav, NavDropdown, Container,  Row, Col} from 'react-bootstrap';
import firebase from 'firebase';
import { connect } from 'react-redux';
import Router from 'next/router';


class Header extends Component {

    constructor(props) {
        super (props);
        this.logout = this.logout.bind(this);
    }
    // ログアウト処理
    logout() {
        firebase.auth().signOut();

        this.props.dispatch({
            type:'UPDATE_USER',
            value:{
                login:false,
                username: 'ログイン',
                email: ''
            }
        });
        Router.push('/index');
    }

    render () {
        return (<header>
            <Container className="container-title">
                <Row>
                    <Col sm={8}>
                        <h1 className="top-title">
                            AMS
                            <span className="title-size"> -{this.props.title}-</span>
                        </h1>
                    </Col>
                    <Col sm={4}>
                        <Nav className="top-nav" activeKey="/home">
                           <span>利用者：</span>
                            <NavDropdown title={ this.props.username } id="nav-dropdown">
                                <NavDropdown.Item eventKey="1" href="/setting">個人設定</NavDropdown.Item>
                                <NavDropdown.Item eventKey="2" onClick={ this.logout }>ログアウト</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Col>
                </Row>
            </Container>
            <div className="div-nav">
                <Nav justify className="base-nav" variant="tabs" defaultActiveKey="" >
                    <Nav.Item >
                        <Nav.Link href="/information" >
                            <div class="text-white" >トップ</div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="link-1" href="/monthly">
                            <div class="text-white" >月別入力</div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="link-2" href="/trafficin">
                            <div class="text-white" >社内交通費</div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="link-3" href="/trafficout">
                            <div class="text-white" >社外交通費</div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="link-4"  href="/attendance">
                            <div class="text-white" >勤怠届</div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="link-5" href="/section">
                            <div class="text-white" >課会情報</div>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </header>);
    }
}

Header = connect((state) => state)(Header);
export default Header;