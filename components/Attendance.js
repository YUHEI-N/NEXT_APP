import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import Attendance_TrainDelay from '../components/Attendance_TrainDelay';
import Attendance_LongVacation from '../components/Attendance_LongVacation';

class Attendance extends Component {

    constructor (props) {

        super(props);

        this.state = {
            type:<Attendance_LongVacation />,
        };

        this.onChangeSelect = this.onChangeSelect.bind(this);

    }
    // 申請種別変更処理
    onChangeSelect (e) {

        let selectType;

        if (　e.target.value === "電車遅延" ){
            selectType = <Attendance_LongVacation />;
        } else if ( e.target.value === "長期休暇" ) {
            selectType = <Attendance_TrainDelay />;
        }

        this.setState ({
            type: selectType
        });
    }

    render () {
        
        return (<div class="children-box">
                <Row className="monthly-input">
                    <Col md="auto">申請種別</Col>
                    <Col md="auto">
                        <Form.Control as="select" id="mail1" onChange={ this.onChangeSelect }>
                            <option value="電車遅延">電車遅延</option>
                            <option value="長期休暇">長期休暇</option>
                        </Form.Control>
                    </Col>
                </Row>
                <hr/>
                { this.state.type }
        </div>);
    }
}

export default Attendance;