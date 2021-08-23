import React, { Component } from 'react';
import { Container, Row, Col, Form, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import firebase from "firebase";
import "firebase/database";

class SectionAde extends Component {

    constructor (props) {

        super(props);

        this.state = {
            data:[],
            data1:[]
        }

        this.getFireData();

        this.onClickCommit = this.onClickCommit.bind(this);
    }

    // firebaseから情報を取得
    getFireData () {
        // firebaseにアクセス 
        let db = firebase.database();
        let ref_m = db.ref('m_section/' + this.props.division + '/' );
        let ref_t = db.ref('t_section_attendance/' + this.props.division + '/' + this.props.division_day + '/' );
        let self = this;
        // 課員情報取得
        ref_m.on('value', (snapshot) => {
            if (snapshot.val() !== null){

                self.setState({ data: snapshot.val() });
            
            }
        });  
        // 対象年月日の課会出欠情報取得
        ref_t.on('value', (snapshot) => {
            if (snapshot.val() !== null){

                self.setState({ data1: snapshot.val() });
            
            }
        });  

    }

    // 入力情報を登録
    onClickCommit () {

        let division = this.props.division;
        let division_day = this.props.division_day;
        // idでtableの要素を取得し、trタグのNodeListを取得
        let table = document.getElementById('sectionade-tbody');
        let tbl_tr = table.querySelectorAll('tr');

        let byId = function( id ) { return document.getElementById( id ).value };
        // firebaseにアクセス 
        let db = firebase.database();
        let ref = db.ref('t_section_attendance/' + division + '/' + division_day );
        // 開始時間と終了時間を登録
        ref.set({
            start_time: byId("start_time"),
            end_time: byId("end_time"),
        });

        // テーブルの1行(trタグ)毎に処理
        tbl_tr.forEach(function (tr) {
            // tdタグのNodeListを取得
            let cells = tr.querySelectorAll('td');
            // firebaseの更新先設定 
            let userId = cells[0].firstElementChild.textContent;　// 社員番号
            let selectValue = cells[2].firstElementChild.value;   // 出欠
            // firebaseにアクセス 
            let ref = db.ref('t_section_attendance/' + division + '/' + division_day + '/' + userId );
            // 出欠情報を登録
            ref.set({
                select_value: selectValue
            });
        });
    }

    render () {
        // yyyy-mm-dd を yyyy年mm月dd に変換
        let str = this.props.division_day ;
        let date = str.split( '-' );
        let strDate = date[0] + "年" + date[1] + "月" + date[2] + "日";

        let result = [];
        let selectDefault;
                
        for (let key in this.state.data) {

            if (this.state.data1.length !== 0){
                selectDefault = this.state.data1[key]['select_value'];
            }

            result.push(<tr key={key} className="sectionade-tr" >
                <td>
                    <Form.Text className="sectionade-keywidth">{key}</Form.Text>
                </td>
                <td>
                    <Form.Text className="sectionade-namewidth">{ this.state.data[key] }</Form.Text>
                </td>
                <td>
                    <Form.Control className="sectionade-selectwidth" defaultValue={selectDefault} size="sm" as="select" >
                        <option value="○" >○</option>
                        <option value="×" >×</option>
                    </Form.Control>
                </td>
            </tr>);

        }

        return (<div class="children-box">
            <Container>
                <Row className="monthly-input">
                    <Col sm={2}> {strDate} </Col>
                    <Col sm={1}>{ this.props.division }</Col>
                </Row>
                <br/>
                <Row className="monthly-input">
                    <Col sm="auto">開始時刻</Col>
                    <Col sm={2}>
                        <Form.Control id="start_time" size="sm" type="time" defaultValue= {this.state.data1.start_time} />
                    </Col>
                    <Col sm="auto">終了時刻</Col>
                    <Col sm={2}>
                        <Form.Control id="end_time" size="sm" type="time" defaultValue= {this.state.data1.end_time} />
                    </Col>
                </Row>
                <hr/>
                <Table className="sectionade-all" bordered size="sm">
                <thead className="sectionade-header">
                    <tr>
                        <th>社員番号</th>
                        <th>課員名</th>
                        <th>出欠</th>
                    </tr>
                </thead>
                <tbody id="sectionade-tbody" >{result}</tbody>
            </Table>
            </Container>
            <a href="javascript:void(0)" class="btn btn--orange btn--circle btn--circle-a btn--shadow" onClick={this.onClickCommit} >保存</a>
        </div>);
    }
}

SectionAde = connect((state)=>state)(SectionAde);
export default SectionAde;