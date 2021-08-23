import React, { Component } from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';
import Lib from '../static/alert_lib';

class Attendance_TrainDelay extends Component {

    constructor (props) {
        super(props);
        this.state = {
            msg:"",
            alert:"",
        };
        this.onChangeCheck = this.onChangeCheck.bind(this);
        this.onClickMail = this.onClickMail.bind(this);
    }

    onChangeCheck (e) {
        if (e.target.checked) {
            document.getElementById("atd").className = "form-inline";
        }else{
            document.getElementById("atd").className = "form-inline d-none";
        }
    }

    onClickMail () {
        //申請種別を取得
        let applicationType = document.getElementById("mail1").value;
        //件名を取得
        let subjectValue = document.getElementById("mail2").value;
        //出社時間を取得
        let attendanceTime = document.getElementById("mail3").value;
        //路線を取得
        let routeValue = document.getElementById("mail4").value;
        //有給消化を取得
        let paidDigestion = document.getElementById("mail5");
        //半休を取得
        let halfHoliday = document.getElementById("mail6");
        //時間休を取得
        let timeOff = document.getElementById("mail7");
        //必須入力チェック
        let alertCheck = [];
        alertCheck.push(Lib.enteredalert(subjectValue, "件名"));
        alertCheck.push(Lib.enteredalert(attendanceTime, "出社時間"));
        alertCheck.push(Lib.enteredalert(routeValue, "路線"));
        let alertFilter = alertCheck.filter(value => value !== "" );

        //有給消化判定
        let paidCheckMsg = "";

        if ( paidDigestion.checked ) {
 
            if ( halfHoliday.checked ){
                paidCheckMsg = "※有給消化(半休)で処理してください。";
            } else if ( timeOff.checked ){
                paidCheckMsg = "※有給消化(時間休)で処理してください。";
            } else {
                alertFilter.push("※半休、または時間休にチェックを入れてください。");
            }
 
        }

        //メール本文作成判定
        //未入力時アラート
        if (alertFilter.length !== 0) {

            let alertMap = alertFilter.map( function(value) {

                                let valueJoin = <tr><th>{value}</th></tr>;
                                return valueJoin;   

                            });
            
            this.setState ({
                alert:  <div className="alert-form">
                            <table>{ alertMap }</table>
                        </div>
            });

        } else {

            this.setState ({
                alert: "",
                msg: "申請種別は" + applicationType + "です。" + "\n" 
                    + "出勤時間は" + attendanceTime + "です。" + "\n"
                    + "路線は" + routeValue + "です。" + "\n"
                    + paidCheckMsg,
            });
    
        }

    }

    render () {
        
        return (
            <Container>
                {this.state.alert}
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} md = {5} controlId="formGridState" >
                            <Form.Label>件名　</Form.Label>
                            <span class="badge badge-danger">必須</span>
                            <Form.Control type="text" className="setting-form" id="mail2" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md = {2} controlId="formGridState">
                            <Form.Label>出社時間　</Form.Label>
                            <span class="badge badge-danger">必須</span>
                            <Form.Control type="time" className="setting-form" id="mail3" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md = {5} controlId="formGridState" >
                            <Form.Label>路線名　</Form.Label>
                            <span class="badge badge-danger">必須</span>
                            <Form.Control type="text" className="setting-form"  id="mail4"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md = {2} controlId="formGridCheckbox">
                            <Form.Check type="checkbox" label="有給消化" id="mail5" onChange={ this.onChangeCheck }/>
                        </Form.Group>
                        <Form.Group as={Col} md = {2.5} controlId="formGridCheckbox" >
                            <div class="form-inline d-none" id="atd" >
                                <Form.Label as={Col} >休暇選択</Form.Label>
                                <Form.Check 
                                    type="radio"
                                    label="半休　"
                                    name="formAttendanceRadios"
                                    id="mail6"
                                />
                                <Form.Check
                                    type="radio"
                                    label="時間休"
                                    name="formAttendanceRadios"
                                    id="mail7"
                                />
                            </div>
                        </Form.Group>
                    </Form.Row>
                    <hr/>
                    <Form.Row>
                        <table  class="atd-table">
                            <tr>
                                <td rowspan="2">
                                    <Button variant="outline-secondary" size="sm" onClick={ this.onClickMail }>本文作成</Button>
                                </td>
                                <td>CC1</td>
                                <td>
                                    <Form.Check type="checkbox" label="個人設定アドレス" />
                                </td>
                            </tr>
                            <tr>
                                <td>CC2</td>
                                <td>
                                    <Form.Check type="checkbox" label="個人設定アドレス" />
                                </td>
                            </tr>
                        </table>
                    </Form.Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3,10} defaultValue={ this.state.msg }></Form.Control>
                    </Form.Group>
                </Form>
                <a href="" class="btn btn--orange btn--circle btn--circle-a btn--shadow">送信</a>
            </Container>
        );
    }
}

export default Attendance_TrainDelay;