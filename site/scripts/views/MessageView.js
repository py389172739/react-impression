import React, { Component } from 'react';
import { Card, Row, Col, Button, Message, Icon, Breadcrumb } from '../components/base';
import { CommenTable } from '../components';

export default class MessageView extends Component{
    showInfoMessageHandle(){
        Message.info('你好，这是一条info消息！');
    }
    showSuccessMessageHandle(){
        Message.success('你好，这是一条success消息！');
    }
    showWarningMessageHandle(){
        Message.warning('你好，这是一条warning消息！');
    }
    showErrorMessageHandle(){
        Message.error('你好，这是一条error消息！');
    }
    showLoadingMessageHandle(){
        Message.loading('正在执行中...', 0);

        //5秒后关闭
        setTimeout(() => {
            Message.hideMessage();
        }, 5000);
    }
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Example</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Button style="primary" outline onClick={this.showInfoMessageHandle}>
                                    信息
                                </Button>
                            </Col>
                            <Col>
                                <Button style="default" onClick={this.showSuccessMessageHandle}>
                                    <span className="text-success">成功</span>
                                </Button>
                            </Col>
                            <Col>
                                <Button style="secondary" outline onClick={this.showWarningMessageHandle}>
                                    警告
                                </Button>
                            </Col>
                            <Col>
                               <Button style="default" onClick={this.showErrorMessageHandle}>
                                    <span className="text-danger">错误</span>
                               </Button>
                            </Col>
                            <Col>
                               <Button style="primary" outline onClick={this.showLoadingMessageHandle}>
                                    <Icon type="spinner" left/>Loading
                               </Button>
                            </Col>
                        </Row>
                    </Card>
                    <Message/>
                    <h3>API</h3>
                    <ul>
                        <li><code>Message.info(message, duration)</code></li>
                        <li><code>Message.success(message, duration)</code></li>
                        <li><code>Message.warning(message, duration)</code></li>
                        <li><code>Message.error(message, duration)</code></li>
                        <li><code>Message.loading(message, duration)</code></li>
                    </ul>
                    <CommenTable
                        data = {[
                            ['message', '提示内容', 'string', ''],
                            ['duration', '停留时间（ms）', 'number', '2000'],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

MessageView.title = 'Message';
