import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, Modal, Button } from 'react-bootstrap';
import firebase from "firebase";
import "firebase/database";

class Section extends Component {

    constructor (props) {

        super(props);

        let today = new Date();
        let year = today.getFullYear();
        let day = today.getMonth() + 1;

        this.state = {
            year: year,
            month: day,
            show: false,
            modalMsg: ""
        };

        this.getFireData();

        this.handleClose     = this.handleClose.bind(this);
        this.handleShow      = this.handleShow.bind(this);
        this.onChangeYear    = this.onChangeYear.bind(this);
        this.onChangeMonth   = this.onChangeMonth.bind(this);
        this.onClickDivision = this.onClickDivision.bind(this);
        this.getFireData     = this.getFireData.bind(this);
        this.targetSave      = this.targetSave.bind(this);

    }

    // モーダル非表示
    handleClose() {
        this.setState({
            show:false
        });
    }

    // モーダル表示
    handleShow() {
        this.setState({
            show:true
        });
    }

    // 年変更時の処理 
    onChangeYear (e) {

        // firebaseにアクセス 
        let db = firebase.database();
        let ref = db.ref('t_section_date/' + e.target.value + '/' + this.state.month + '/'  );
        let self = this;
        // 抽出
        ref.on('value', (snapshot) => {
            // 対象年月の情報で処理分岐
            if (snapshot.val() === null){

                self.setState({ 
                    year: e.target.value, 
                    data: [] 
                });
            
            } else {

                self.setState({ 
                    year: e.target.value,
                    data: snapshot.val() 
                });
            
            }
        });
    }

    // 月変更時の処理 
    onChangeMonth (e) {

        // firebaseにアクセス 
        let db = firebase.database();
        let ref = db.ref('t_section_date/' + this.state.year +  '/' + e.target.value + '/'  );
        let self = this;
        // 抽出
        ref.on('value', (snapshot) => {
            // 対象年月の情報で処理分岐
            if (snapshot.val() === null){

                self.setState({ 
                    month: e.target.value,
                    data: [] 
                });
            
            } else {
            
                self.setState({ 
                    month: e.target.value,
                    data: snapshot.val() 
                });
            
            }
        });
    }

    // 課名リンク押下時の処理
    onClickDivision (e) {
        // 開始日取得
        let id = "date" + e.target.text;
        let inputCheck = document.getElementById( id ).value;
        // 情報の有無で分岐
        if ( inputCheck ==="" ){
            // 未入力メッセージ表示
            this.setState({　modalMsg: "開始日を入力してください。"　});
            this.handleShow();

            e.preventDefault();

        } else {
            // storeにディスパッチ
            return this.props.dispatch({ 
                        type: 'DIVISION' ,
                        value:{
                            division: e.target.text,
                            division_day:inputCheck
                        }
                    });

        }
    }

    // firebaseから情報を取得
    getFireData () {
        // firebaseにアクセス 
        let db = firebase.database();
        let ref = db.ref('t_section_date/' + this.state.year + '/' + this.state.month + '/'  );
        let self = this;
        // 抽出
        ref.on('value', (snapshot) => {
            if (snapshot.val() !== null){

                self.setState({ data: snapshot.val() });
            
            }
        });        
    }

    // 入力情報を登録
    targetSave () {

        let year = this.state.year;
        let month = this.state.month;

        // firebaseにアクセス 
        let db = firebase.database();
        let ref = db.ref( 't_section_date/'  + year + '/' + month );

        let byId = function( id ) { return document.getElementById( id ).value };

        ref.set({
             
            DA1_date   : byId("dateDA1"),    // DA1
            DA2_date   : byId("dateDA2"),    // DA2
            DB1_date   : byId("dateDB1"),    // DB1
            DB2_date   : byId("dateDB2"),    // DB2
            DB3_date   : byId("dateDB3"),    // DB3

        });
    }
 
    render () {
        // 年に表示する情報を取得
        let today = new Date();
        let yearAgo = today.getFullYear()-1;
        let yearThis = today.getFullYear();
        let yearLater = today.getFullYear()+1;
        // 開始日の情報を表示
        let {   DA1_date
              , DA2_date
              , DB1_date
              , DB2_date
              , DB3_date
            } = this.state.data !== undefined ? this.state.data : "";

        return (<div class="children-box">
            <Container>
                <Row className="monthly-input">
                    <Col md="auto">対象年月</Col>
                    <Col md="auto">
                        <Form.Control as="select" defaultValue={ yearThis } onChange={ this.onChangeYear }>
                            <option>{ yearAgo }</option>
                            <option>{ yearThis }</option>
                            <option>{ yearLater }</option>
                        </Form.Control>
                    </Col>
                    <Col md="auto">年</Col>
                    <Col md="auto">
                        <Form.Control as="select" defaultValue={ this.state.month } onChange={ this.onChangeMonth }>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </Form.Control>
                    </Col>
                    <Col md="auto">月</Col>
                </Row>
                <hr/>
                <Form>
                    <Form.Row className="monthly-input">
                        <Col sm={1}>
                            <a href="/sectionade" onClick={ this.onClickDivision } >DA1</a>
                        </Col>
                        <Col sm={1}>開始日</Col>    
                        <Col sm={2}>
                            <Form.Control size="sm" id="dateDA1" type="date" defaultValue={DA1_date} />
                        </Col>    
                    </Form.Row>
                    <br/>
                    <Form.Row className="monthly-input">
                        <Col sm={1}>
                        <a href="/sectionade" onClick={ this.onClickDivision } >DA2</a>
                        </Col>
                        <Col sm={1}>開始日</Col>    
                        <Col sm={2}>
                            <Form.Control size="sm" id="dateDA2" type="date" defaultValue={DA2_date}　/>
                        </Col>    
                    </Form.Row>
                    <br/>
                    <Form.Row className="monthly-input">
                        <Col sm={1}>
                        <a href="/sectionade" onClick={ this.onClickDivision } >DB1</a>
                        </Col>
                        <Col sm={1}>開始日</Col>    
                        <Col sm={2}>
                            <Form.Control size="sm" id="dateDB1" type="date" defaultValue={DB1_date}　/>
                        </Col>    
                    </Form.Row>
                    <br/>
                    <Form.Row className="monthly-input">
                        <Col sm={1}>
                        <a href="/sectionade" onClick={ this.onClickDivision } >DB2</a>
                        </Col>
                        <Col sm={1}>開始日</Col>    
                        <Col sm={2}>
                            <Form.Control size="sm" id="dateDB2" type="date" defaultValue={DB2_date}　/>
                        </Col>    
                    </Form.Row>
                    <br/>
                    <Form.Row className="monthly-input">
                        <Col sm={1}>
                        <a href="/sectionade" onClick={ this.onClickDivision } >DB3</a>
                        </Col>
                        <Col sm={1}>開始日</Col>    
                        <Col sm={2}>
                            <Form.Control size="sm" id="dateDB3" type="date" defaultValue={DB3_date} />
                        </Col>    
                    </Form.Row>
                </Form>
                <br/>
                <br/>
            </Container>
            <a href="javascript:void(0)" class="btn btn--orange btn--circle btn--circle-a btn--shadow" onClick={this.targetSave}>保存</a>
            <Modal centered show={this.state.show} onHide={this.handleClose}>
               	<Modal.Body>
               	    {this.state.modalMsg}
               	</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
           	</Modal>
        </div>);
    }
}

Section = connect((state)=>state)(Section);
export default Section;