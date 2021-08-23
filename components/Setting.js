import React, { Component } from 'react';
import { Col, Form} from 'react-bootstrap';
import { connect } from 'react-redux';
import firebase from "firebase";
import "firebase/database";

class Setting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
        this.getFireData();
        this.onClickCommit = this.onClickCommit.bind(this);
    }

    // firebaseからユーザー情報取得
    getFireData () {
        // firebaseにアクセス 
        let db = firebase.database();
        let ref = db.ref( 'm_user/' + this.props.userid );
        let self = this;
        
        ref.on('value', (snapshot) => {
            if (snapshot.val() !== null){

                self.setState({ data: snapshot.val() });
            
            }
        });        
    }

    // フォームの情報をfirebaseに登録
    onClickCommit() {

        // firebaseにアクセス 
        let db = firebase.database();
        let ref = db.ref( 'm_user/' + this.props.userid );

        let byId = function( id ) { return document.getElementById( id ).value };

        ref.set({
             
            mail_address   : byId("mailAddress"),    // メールアドレス
            start_time     : byId("startTime"),      // 始業時間
            closing_time   : byId("closingTime"),    // 終業時間
            break_start    : byId("breakStart"),     // 休憩開始
            break_end      : byId("breakEnd"),       // 休憩終了
            break_time     : byId("breakTime"),      // 休憩時間
            working_style  : byId("workingStyle"),   // 作業形態
            contract_terms : byId("contractTerms"),  // 契約条件
            reference_time : byId("referenceTime"),  // 基準時間
            remarks1       : byId("remarks1"),       // 備考１
            remarks2       : byId("remarks2"),       // 備考２
            remarks3       : byId("remarks3"),       // 備考３
            remarks4       : byId("remarks4"),       // 備考４
            remarks5       : byId("remarks5"),       // 備考５
            route1         : byId("route1"),         // 路線１
            route2         : byId("route2"),         // 路線２
            route3         : byId("route3"),         // 路線３
            mail_cc1       : byId("mailCC1"),        // 勤怠CC1
            mail_cc2       : byId("mailCC2"),        // 勤怠CC2 

        });
    }

    render () {

        let {   mail_address
              , start_time
              , closing_time
              , break_start
              , break_end
              , break_time
              , working_style
              , contract_terms
              , reference_time
              , remarks1
              , remarks2
              , remarks3
              , remarks4
              , remarks5
              , route1
              , route2
              , route3
              , mail_cc1
              , mail_cc2
            } = this.state.data.length !== 0 ? this.state.data : "";

        return (<div class="children-box">
        <Form>
            <Form.Row>
                <Form.Group as={Col} md = {5} controlId="formGridState" >
                    <Form.Label>メールアドレス</Form.Label>
                    <Form.Control type="text" className="setting-form" id="mailAddress" defaultValue= {mail_address} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md = {2} controlId="formGridState">
                    <Form.Label>始業時間</Form.Label>
                    <Form.Control type="time" className="setting-form" id="startTime" defaultValue= {start_time} />
                </Form.Group>
                <Form.Group as={Col} md = {{ span: 2, offset: 1 }} controlId="formGridState">
                    <Form.Label>終業時間</Form.Label>
                    <Form.Control type="time" className="setting-form" id="closingTime" defaultValue= {closing_time} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md = {2} controlId="formGridState">
                    <Form.Label>休憩開始</Form.Label>
                    <Form.Control type="time" className="setting-form" id="breakStart" defaultValue= {break_start} />
                </Form.Group>
                <Form.Group as={Col} md = {{ span: 2, offset: 1 }} controlId="formGridState">
                    <Form.Label>休憩終了</Form.Label>
                    <Form.Control type="time" className="setting-form" id="breakEnd" defaultValue= {break_end} />
                </Form.Group>
                <Form.Group as={Col} md = {{ span: 2, offset: 1 }} controlId="formGridState">
                    <Form.Label>休憩時間</Form.Label>
                    <Form.Control type="time" className="setting-form" id="breakTime" defaultValue= {break_time} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}  md = {2} controlId="formGridState">
                    <Form.Label>作業形態</Form.Label>
                    <Form.Control as="select" className="setting-form" id="workingStyle" defaultValue= {working_style} >
                        <option></option>
                        <option value="派遣" >派遣</option>
                        <option value="準委任" >準委任</option>
                        <option value="受託" >受託</option>
                        <option value="作業請負" >作業請負</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}  md = {{ span: 2, offset: 1 }} controlId="formGridState">
                    <Form.Label>契約条件</Form.Label>
                    <Form.Control as="select" className="setting-form" id="contractTerms" defaultValue= {contract_terms} >
                        <option></option>
                        <option value="固定契約" >固定契約</option>
                        <option value="基準時間契約" >基準時間契約</option>
                        <option value="時給契約" >時給契約</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md = {5} controlId="formGridState">
                    <Form.Label>基準時間</Form.Label>
                    <Form.Control type="text" className="setting-form" id="referenceTime" defaultValue= {reference_time} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md = {5} controlId="formGridState">
                    <Form.Label>備考１</Form.Label>
                    <Form.Control type="text" className="setting-form" id="remarks1" defaultValue= {remarks1} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md = {5} controlId="formGridState">
                    <Form.Label>備考２</Form.Label>
                    <Form.Control type="text" className="setting-form" id="remarks2" defaultValue= {remarks2} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md = {5} controlId="formGridState">
                    <Form.Label>備考３</Form.Label>
                    <Form.Control type="text" className="setting-form" id="remarks3" defaultValue= {remarks3} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md = {5} controlId="formGridState">
                    <Form.Label>備考４</Form.Label>
                    <Form.Control type="text" className="setting-form" id="remarks4" defaultValue= {remarks4} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md = {5} controlId="formGridState">
                    <Form.Label>備考５</Form.Label>
                    <Form.Control type="text" className="setting-form" id="remarks5" defaultValue= {remarks5} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md = {5} controlId="formGridState">
                    <Form.Label>路線１</Form.Label>
                    <Form.Control type="text" className="setting-form" id="route1" defaultValue= {route1} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md = {5} controlId="formGridState">
                    <Form.Label>路線２</Form.Label>
                    <Form.Control type="text" className="setting-form" id="route2" defaultValue= {route2} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md = {5} controlId="formGridState">
                    <Form.Label>路線３</Form.Label>
                    <Form.Control type="text" className="setting-form" id="route3" defaultValue= {route3} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md = {5} controlId="formGridState">
                    <Form.Label>勤怠CC1</Form.Label>
                    <Form.Control type="text" className="setting-form" id="mailCC1" defaultValue= {mail_cc1} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md = {5} controlId="formGridState" >
                    <Form.Label>勤怠CC2</Form.Label>
                    <Form.Control type="text" className="setting-form" id="mailCC2" defaultValue= {mail_cc2} />
                </Form.Group>
            </Form.Row>
            <br/>
            <a href="javascript:void(0)" class="btn btn--orange btn--circle btn--circle-a btn--shadow" onClick={this.onClickCommit} >保存</a>
        </Form>
    </div>);
    }
}

Setting = connect((state) => state)(Setting);
export default Setting;