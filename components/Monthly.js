import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Table, Modal } from 'react-bootstrap';
import Lib from '../static/timemath_lib';
import { connect } from 'react-redux';
import firebase from "firebase";
import "firebase/database";

class Monthly extends Component {

    constructor(props) {

        super(props);

        let today = new Date();
        let year = today.getFullYear();
        let day = today.getMonth() + 1;
        
        this.state = {
            year: year,
            month: day,
            attendanceTime: "00:00",
            leavingTime: "00:00",
            breakTime: "00:00",
            data:[],
            show: false
        }

        this.getFireData();

        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeMonth = this.onChangeMonth.bind(this);
        this.onChangeAttendance = this.onChangeAttendance.bind(this);
        this.onChangeLeaving = this.onChangeLeaving.bind(this);
        this.onChangeBreak = this.onChangeBreak.bind(this);
        this.onClickCommit = this.onClickCommit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);

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
    // 月別情報取得
    getFireData () {
        // firebaseにアクセス 
        let db = firebase.database();
        let ref = db.ref('t_monthly/' + this.props.userid + '/' + this.state.year + '/' + this.state.month + '/'  );
        let self = this;
        
        ref.on('value', (snapshot) => {
            if (snapshot.val() !== null){

                self.setState({ data: snapshot.val() });
            
            }
        });        
    }
    // 年変更時、情報取得
    onChangeYear(e) {
        // firebaseにアクセス 
        let db = firebase.database();
        let ref = db.ref('t_monthly/' + this.props.userid + '/' + e.target.value + '/' + this.state.month + '/'  );
        let self = this;

        ref.on('value', (snapshot) => {
            if (snapshot.val() == null){

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
    // 月変更時、情報取得
    onChangeMonth(e) {

        // firebaseにアクセス 
        let db = firebase.database();
        let ref = db.ref('t_monthly/' + this.props.userid + '/' + this.state.year + '/' + e.target.value + '/'  );
        let self = this;
    
        ref.on('value', (snapshot) => {
            if (snapshot.val() == null){

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

    onChangeAttendance(e) {

        let attendance_sum, stateAttendance;

        if (e.target.getAttribute("placeholder") == "") {

            attendance_sum = Lib.sum(e.target.value, this.state.attendanceTime);
            e.target.setAttribute("placeholder", e.target.value);

        } else if (e.target.getAttribute("placeholder") !== e.target.value) {

            stateAttendance = Lib.sub(this.state.attendanceTime, e.target.getAttribute("placeholder"));
            attendance_sum = Lib.sum(e.target.value, stateAttendance);
            e.target.setAttribute("placeholder", e.target.value);

        }

        this.setState({
            attendanceTime: attendance_sum
        });
    }

    onChangeLeaving(e) {

        let leaving_sum, stateLeaving;

        if (e.target.getAttribute("placeholder") == "") {

            leaving_sum = Lib.sum(e.target.value, this.state.leavingTime);
            e.target.setAttribute("placeholder", e.target.value);

        } else if (e.target.getAttribute("placeholder") !== e.target.value) {

            stateLeaving = Lib.sub(this.state.leavingTime, e.target.getAttribute("placeholder"));
            leaving_sum = Lib.sum(e.target.value, stateLeaving);
            e.target.setAttribute("placeholder", e.target.value);

        }

        this.setState({
            leavingTime: leaving_sum,
        });
    }

    onChangeBreak(e) {

        let break_sum, stateBreak;

        if (e.target.getAttribute("placeholder") == "") {

            break_sum = Lib.sum(e.target.value, this.state.breakTime);
            e.target.setAttribute("placeholder", e.target.value);

        } else if (e.target.getAttribute("placeholder") !== e.target.value) {

            stateBreak = Lib.sub(this.state.breakTime, e.target.getAttribute("placeholder"));
            break_sum = Lib.sum(e.target.value, stateBreak);
            e.target.setAttribute("placeholder", e.target.value);

        }

        this.setState({
            breakTime: break_sum
        });
    }
    // 入力情報登録
    onClickCommit() {

        let year = this.state.year;
        let month = this.state.month;
        let userid = this.props.userid;

        // idでhtmlからtableの要素を取得し、trタグのNodeListを取得
        let table = document.getElementById('monthly-table');
        let tbl_tr = table.querySelectorAll('tr');

        // テーブルの1行(trタグ)毎に処理
        tbl_tr.forEach(function (tr) {
            // tdタグのNodeListを取得
            let cells = tr.querySelectorAll('td');
            // firebaseの更新先設定 
            let number = cells[0].textContent;　// 日
            let day = ("00" + number).slice(-2);
            // firebaseにアクセス 
            let db = firebase.database();
            let ref = db.ref('t_monthly/' + userid + '/' + year + '/' + month + '/' + day);

            ref.set({
                attendance_time    : cells[2].firstElementChild.value,　// 出社時間
                leave_time         : cells[3].firstElementChild.value,　// 退社時間
                break_time         : cells[4].firstElementChild.value,  // 休憩
                midnight_time      : cells[5].firstElementChild.value,  // 深夜休
                attendance_details : cells[6].firstElementChild.value,  // 勤怠
                remarks            : cells[7].firstElementChild.value,  // 備考
            });
        });
        //　モーダル表示
        this.handleShow();

    }
    
    render() {
        // 年を取得(前後１年含む)
        let today = new Date();
        let yearAgo = today.getFullYear() - 1;
        let yearThis = today.getFullYear();
        let yearLater = today.getFullYear() + 1;

        let result = [];
        let attendance_time = "";
        let leave_time = "";
        let break_time = "";
        let midnight_time = "";
        let attendance_details = "";
        let remarks = "";

        // 月の末日を取得
        let date = new Date(this.state.year, this.state.month, 0);
        let lastDay = date.getDate();

        for (let i = 1; i <= lastDay; i++) {
            // 指定日付で初期化したDateオブジェクトのインスタンスを生成する
            let dayOfWeekJP = new Date(this.state.year, this.state.month - 1, i);
            let dayOfWeekStrJP = ["日", "月", "火", "水", "木", "金", "土"];
            let dayOfWeek = dayOfWeekStrJP[dayOfWeekJP.getDay()];
            // 土日色付け処理
            let holidayColor = ""
            if (dayOfWeek == "日" || dayOfWeek == "土") {
                holidayColor = "" + "holiday-color" + ""
            }
            // ゼロパディング処理
            let day = ("00" + i ).slice(-2);
                        
            if ( this.state.data.length !== 0 ) { 

                attendance_time = this.state.data[day].attendance_time;　　　　 // 出社
                leave_time = this.state.data[day].leave_time;　　　　　　　　　　// 退社
                break_time = this.state.data[day].break_time;                  // 休憩（深夜含む）
                midnight_time = this.state.data[day].midnight_time;            // 内 深夜休
                attendance_details = this.state.data[day].attendance_details;  // 勤怠
                remarks = this.state.data[day].remarks;                        // 備考

            }

            result.push(<tr className={holidayColor} key={i}>
                <td>
                    <div className="table-day">{day}</div>
                </td>
                <td>
                    <div className="table-day">{dayOfWeek}</div>
                </td>
                <td>
                    <Form.Control className="table-from" type="time" onChange={this.onChangeAttendance} placeholder=""  defaultValue= {attendance_time} />
                </td>
                <td>
                    <Form.Control className="table-from" type="time" onChange={this.onChangeLeaving} placeholder="" defaultValue= {leave_time} />
                </td>
                <td>
                    <Form.Control className="table-from" type="time" onChange={this.onChangeBreak} placeholder="" defaultValue= {break_time} />
                </td>
                <td>
                    <Form.Control className="table-from" type="time" defaultValue= {midnight_time} />
                </td>
                <td>
                    <Form.Control className="table-from" as="select" defaultValue= {attendance_details} >
                        <option ></option>
                        <option value="休暇(私用)" >休暇(私用)</option>
                        <option value="休暇(体調不良)" >休暇(体調不良)</option>
                        <option value="遅刻(私用)" >遅刻(私用)</option>
                        <option value="遅刻(電車遅延)" >遅刻(電車遅延)</option>
                        <option value="遅刻(体調不良)" >遅刻(体調不良)</option>
                        <option value="早退(私用)" >早退(私用)</option>
                        <option value="早退(体調不良)" >早退(体調不良)</option>
                        <option value="半日休暇(私用)" >半日休暇(私用)</option>
                        <option value="半日休暇(体調不良)" >半日休暇(体調不良)</option>
                        <option value="夏季・冬季休暇" >夏季・冬季休暇</option>
                        <option value="現場年休" >現場年休</option>
                        <option value="健康診断" >健康診断</option>
                        <option value="出張(運転あり)" >出張(運転あり)</option>
                        <option value="出張(運転なし)" >出張(運転なし)</option>
                        <option value="その他(理由明記)" >その他(理由明記)</option>
                    </Form.Control>
                </td>
                <td>
                    <Form.Control className="table-text" type="text" defaultValue= {remarks}/>
                </td>
            </tr>);
        }

        return (<div class="children-box">
            <Container>
                <Row className="monthly-input">
                    <Col md="auto">対象年月</Col>
                    <Col md="auto">
                        <Form.Control as="select" defaultValue={yearThis} onChange={this.onChangeYear}>
                            <option>{yearAgo}</option>
                            <option>{yearThis}</option>
                            <option>{yearLater}</option>
                        </Form.Control>
                    </Col>
                    <Col md="auto">年</Col>
                    <Col md="auto">
                        <Form.Control as="select" defaultValue={this.state.month} onChange={this.onChangeMonth}>
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
                    <Col md={{ span: "auto", offset: 2 }}>月間稼働時間</Col>
                    <Col md="auto">{Lib.sub(this.state.leavingTime, this.state.attendanceTime, this.state.breakTime)}</Col>
                    <Col md="auto">
                        <Button variant="secondary">初期値</Button>{' '}
                    </Col>
                </Row>
            </Container>
            <br />
            <Table className="table-all" bordered size="sm"  >
                <thead className="table-header">
                    <tr>
                        <th>日</th>
                        <th>曜</th>
                        <th>出社</th>
                        <th>退社</th>
                        <th>休憩(深夜含)</th>
                        <th>内 深夜休</th>
                        <th>勤怠</th>
                        <th>備考</th>
                    </tr>
                </thead>
                <tbody id="monthly-table">{result}</tbody>
            </Table>
            <Modal centered show={this.state.show} onHide={this.handleClose}>
               	<Modal.Body>
               	    保存しました。
               	</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
           	</Modal>
            <a href="javascript:void(0)" class="btn btn--orange btn--circle btn--circle-a btn--shadow" onClick={this.onClickCommit} >保存</a>
        </div>)
    }
}


Monthly = connect((state) => state)(Monthly);
export default Monthly;