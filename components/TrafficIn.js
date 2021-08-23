import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Table, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import firebase from "firebase";
import "firebase/database";

class TrafficIn extends Component {

    constructor (props) {
        
        super(props);

        let today = new Date();
        let year = today.getFullYear();
        let day = today.getMonth() + 1;
        
        this.state = {
            show: false,
            year: year,
            month: day,
            allMoney: 0,
            data: [],
        };

        this.getFireData ();

        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeMonth = this.onChangeMonth.bind(this);
        this.onChangeMoney = this.onChangeMoney.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onClickCommit = this.onClickCommit.bind(this);
    }
    // 月別情報を取得
    getFireData () {
        // firebaseにアクセス 
        let db = firebase.database();
        let ref = db.ref('t_traffic_in/' + this.props.userid + '/' + this.state.year + '/' + this.state.month + '/'  );
        let self = this;
        
        ref.on('value', (snapshot) => {
            if (snapshot.val() != null){

                self.setState({ data: snapshot.val() });
            
            }
        });        
    }

    // 年変更時、情報取得
    onChangeYear (e) {
        // firebaseにアクセス 
        let db = firebase.database();
        let ref = db.ref('t_monthly/' + this.props.userid + '/' + e.target.value + '/' + this.state.month + '/'  );
        let self = this;

        ref.on('value', (snapshot) => {
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
        this.getFireData();
    }

    // 月変更時、情報取得
    onChangeMonth (e) {
        // firebaseにアクセス 
        let db = firebase.database();
        let ref = db.ref('t_traffic_in/' + this.props.userid + '/' + this.state.year + '/' + e.target.value  + '/'  );
        let self = this;
    
        ref.on('value', (snapshot) => {
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
        this.getFireData();
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

    onChangeMoney (e) {

        let allMoney_sum, stateAllMoney;
        let form_value = e.target.value;
        
        if (form_value.match(/^[0-9]*$/) != form_value ) {

            this.handleShow();

        } else {

            if (e.target.getAttribute("placeholder") == "") {

                allMoney_sum = Number(e.target.value) + this.state.allMoney;
                e.target.setAttribute("placeholder", e.target.value);
    
            } else if (e.target.getAttribute("placeholder")  !== e.target.value) {
    
                stateAllMoney = this.state.allMoney - Number(e.target.getAttribute("placeholder"));
                allMoney_sum = Number(e.target.value) + stateAllMoney;
                e.target.setAttribute("placeholder", e.target.value);
    
            } 
             
            this.setState ({
                allMoney: allMoney_sum
            });
    
        }

    }

    // 入力情報をfirebaseに登録
    onClickCommit () {

        let year = this.state.year;
        let month = this.state.month;
        let userid = this.props.userid;

        // idでhtmlからtableの要素を取得し、trタグのNodeListを取得
        let table = document.getElementById('traffic-table');
        let tbl_tr = table.querySelectorAll('tr');

        // テーブルの1行(trタグ)毎に処理
        tbl_tr.forEach(function (tr) {
            // tdタグのNodeListを取得
            let cells = tr.querySelectorAll('td');
            // firebaseの更新先設定 
            let number = cells[0].firstElementChild.value;　//日
            //何も入力されていなければ処理終了
            if ( number === "" ) { return };
            //ゼロパディング処理
            let rowNumber = ("00" + tr.rowIndex).slice(-2);
            // firebaseにアクセス 
            let db = firebase.database();
            let ref = db.ref('t_traffic_in/' + userid + '/' + year + '/' + month + '/' + rowNumber );

            ref.set({
                day                   : number,                            // 日
                purpose               : cells[1].firstElementChild.value,　// 目的
                vehicle               : cells[2].firstElementChild.value,  // 乗り物
                departure_and_arrival : cells[3].firstElementChild.value,  // 発～(経由)～着
                one_way               : cells[4].firstElementChild.value,  // 片往
                amount_of_money       : cells[5].firstElementChild.value   // 金額
            });
        });
    }

    render () {
        // 年を取得(前後１年含む)
        let today = new Date();
        let yearAgo = today.getFullYear()-1;
        let yearThis = today.getFullYear();
        let yearLater = today.getFullYear()+1;

        let result = [];
        // 表示行数指定
        let row = 15;

        for (let i=1; i<=row; i++) {
            //ゼロパディング処理
            let number = ("00" + i).slice(-2);

            let {   day
                  , purpose
                  , vehicle
                  , departure_and_arrival
                  , one_way
                  , amount_of_money
                } = this.state.data[number] !== undefined ? this.state.data[number] : "";

            result.push(<tr　key={i}>
                <td>
                    <Form.Control className="traffic-day" type="text" defaultValue= {day} />
                </td>
                <td>
                    <Form.Control className="traffic-text" type="text" defaultValue= {purpose} />
                </td>
                <td>
                    <Form.Control className="table-from" as="select" defaultValue= {vehicle} >
                        <option ></option>
                        <option value="電車" >電車</option>
                        <option value="バス" >バス</option>
                        <option value="自転車" >自転車</option>
                    </Form.Control>
                </td>
                <td>
                    <Form.Control className="traffic-text" type="text" defaultValue= {departure_and_arrival} />
                </td>
                <td>
                    <Form.Control className="table-from" as="select" defaultValue= {one_way} >
                        <option ></option>
                        <option value="片道" >片道</option>
                        <option value="往復" >往復</option>
                    </Form.Control>
                </td>
                <td>
                    <Form.Control className="traffic-money" type="text" placeholder="" onChange={ this.onChangeMoney } defaultValue= {amount_of_money} />
                </td>
            </tr>);
        }

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
                    <Col md={{ span: "auto", offset: 2 }}>合計金額：</Col>
                    <Col md="auto">{ this.state.allMoney }　円</Col>
                    <Col md="auto">
                        <Button variant="secondary">前月引継</Button>{' '}
                    </Col>
                </Row>
            </Container>
            <br/>
            <Table className="table-all" bordered size="sm">
                <thead className="traffic-header">
                    <tr>
                        <th>日</th>
                        <th>目的</th>
                        <th>乗り物</th>
                        <th>発 ～ (経由) ～ 着</th>
                        <th>片往</th>
                        <th>金額</th>
                    </tr>
                </thead>
                <tbody id="traffic-table" >{result}</tbody>
            </Table>
            <a href="javascript:void(0)" class="btn btn--orange btn--circle btn--circle-a btn--shadow" onClick={this.onClickCommit}>保存</a>
            <Modal centered show={this.state.show} onHide={this.handleClose}>
               <Modal.Body>
                   半角数値のみ入力してください。
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

TrafficIn = connect((state) => state)(TrafficIn);
export default TrafficIn;