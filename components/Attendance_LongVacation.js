import React, { Component } from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';
import Lib from '../static/alert_lib';
import Replace from '../static/replace_lib';


class Attendance_LongVacation extends Component {

    constructor (props) {
        super(props);
        this.state = {
            email:"",
            alert:"",
        };
        this.onClickMail = this.onClickMail.bind(this);
    }

    onClickMail () {
        //申請種別を取得
        let applicationType = document.getElementById("mail1").value;
        //件名を取得
        let subjectValue = document.getElementById("mail2").value;
        //開始日を取得
        let startDate = document.getElementById("mail3").value;
        //終了日を取得
        let endDate = document.getElementById("mail4").value;
        //事由を取得
        let reasonValue = document.getElementById("mail5").value;
        //有給消化を取得
        let paidDigestion = document.getElementById("mail6");

        //必須入力チェック
        let alertCheck = [];
        alertCheck.push(Lib.enteredalert(subjectValue, "件名"));
        alertCheck.push(Lib.enteredalert(startDate, "開始日"));
        alertCheck.push(Lib.enteredalert(endDate, "終了日"));
        alertCheck.push(Lib.enteredalert(reasonValue, "事由"));
        let alertFilter = alertCheck.filter(value => value !== "" );

        //有給消化判定
        let paidCheck = "";

        if ( paidDigestion.checked ) {
 
            paidCheck = "※有給消化で処理してください。";
 
        }

        //メール本文作成判定
        //未入力時アラート
        if (alertFilter.length !== 0) {

            let alertMap = alertFilter.map( function(value) {

                let valueJoin = <tr>
                                    <th>{value}</th>
                                </tr>;

                return valueJoin;

            });
            
            this.setState ({
                alert:  <div className="alert-form">
                            <table>{ alertMap }</table>
                        </div>
            });

        } else {

            startDate = Replace.datereplace(startDate);
            endDate = Replace.datereplace(endDate);

            this.setState ({
                alert: "",
                email: "申請種別は" + applicationType + "です。" + "\n" 
                    + reasonValue + "のため" + startDate + "から" + endDate + "まで休みます。"  + "\n" 
                    + paidCheck,
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
                            <Form.Control type="text" placeholder="" className="setting-form" id="mail2" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md = {2} controlId="formGridState">
                            <Form.Label>開始日　</Form.Label>
                            <span class="badge badge-danger">必須</span>
                            <Form.Control type="date" placeholder="" className="setting-form" id="mail3" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md = {2} controlId="formGridState">
                            <Form.Label>終了日　</Form.Label>
                            <span class="badge badge-danger">必須</span>
                            <Form.Control type="date" placeholder="" className="setting-form" id="mail4" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md = {5} controlId="formGridState" >
                            <Form.Label>事由　</Form.Label>
                            <span class="badge badge-danger">必須</span>
                            <Form.Control type="text" placeholder="" className="setting-form"  id="mail5"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md = {2} controlId="formGridCheckbox">
                            <Form.Check type="checkbox" label="有給消化" id="mail6"　/>
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
                                    <Form.Check
                                        type="checkbox"
                                        label="個人設定アドレス"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>CC2</td>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        label="個人設定アドレス"
                                    />
                                </td>
                            </tr>
                        </table>
                    </Form.Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3,10} defaultValue={ this.state.email }></Form.Control>
                    </Form.Group>
                </Form>
                <a href="" class="btn btn--orange btn--circle btn--circle-a btn--shadow">送信</a>
            </Container>
        );
    }
}

export default Attendance_LongVacation;