import React, { Component } from 'react';
import { Modal, Button, Pagination } from 'react-bootstrap';
import { connect } from 'react-redux';
import firebase from "firebase";
import "firebase/storage";

class Information extends Component {

    constructor(props){
        super(props);

        this.state = {
            show: false,
            modalTiltle:"",
            modalBody:"",
            active:1,
            data:[]
        }

        this.getFireData();

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleActive = this.handleActive.bind(this);
        this.getFireData = this.getFireData.bind(this);
    }

    // モーダル非表示
    handleClose() {
        this.setState({
            show:false
        });
    }

    // モーダル表示
    handleShow(e) {
        // クリックされたNo取得
        let titleNo = e.target.value;
        // data内からNoと合致するメッセージ取得
        let modalStr = this.state.data[ titleNo ].title
        // 改行処理
        let modalMsg = modalStr.split('\n').map(t => (<span>{t}<br /></span>))

        this.setState({
            show:true,
            modalTiltle: e.target.textContent,　// モーダル内のタイトル
            modalBody: modalMsg                 // モーダル内のメッセージ
        });
    }

    // ページネーション内のクリックされたNo取得
    handleActive(e) {
        this.setState({
            active:Number(e.target.text)
        });
    }

    // firebaseからお知らせ情報取得
    getFireData() {

        let db = firebase.database();
        let ref = db.ref('t_information/');
        let self = this;

        ref.on('value', (snapshot) => {
                self.setState({
                    data:snapshot.val()
                });
            });
    }

    render(){

        let items = [];
        let listgroup = [];
        let startNo;
        // お知らせ件数に応じたページネーション設定
        for (let number = 1; number <= (Math.ceil(this.state.data.length / 5)); number++) {
            items.push(
                <Pagination.Item key={number} active={number === this.state.active} onClick={this.handleActive} >
                    {number}
                </Pagination.Item>,
            );
        }

        const paginationBasic = (
            <div class="pagination-items">
                <Pagination>{items}</Pagination>
            </div>
        );
        // 選択されたページネーションによるお知らせ内容変更
        if (this.state.active === 1) {
            startNo = this.state.active;
        } else {
            startNo = (this.state.active-1) * 5 + 1;
        }

        for (let number = startNo; number <= ( this.state.active * 5 ); number++) {

            if ( this.state.data[number] !== undefined ){
                listgroup.push(
                    <li className="list-color" onClick={this.handleShow} value={number} >
                        { this.state.data[number].message }
                    </li>
                );    
            } else {
                listgroup.push(
                    <li  className="list-color">-</li>
                );
            }
        }

        const listBasic = (
            <div>
                <div class="listgroup-color">
                    <ul className="modal-group">
                        {listgroup}
                    </ul>
                </div>
                <div className="list-items">
                    {paginationBasic}
                </div>
            </div>
        );

        return (
        	<div class="index-box">
            	<span class="box-title">会社からの連絡</span>
                {listBasic}
                <Modal centered show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
               	        <Modal.Title>{ this.state.modalTiltle}</Modal.Title>
                	</Modal.Header>
               	    <Modal.Body>
               	        { this.state.modalBody }
               	    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
           	    </Modal>
       	    </div>
        )
    }
}

Information = connect((state)=>state)(Information);
export default Information;