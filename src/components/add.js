import {Component} from "react";
import React from "react";

export  default class Add extends Component {

    constructor(props) {
        super(props);
    }


    add =() => {

        //1.读取输入的数据
        const tdo = this.input.value.trim();
        //2.判断是否合法
        if (!tdo) {
            return 0;
        }

        //3.添加
        this.props.addTodo(tdo);
        //4.清除输入
        this.input.value = '';
    };

    render() {
        const {displayFlag} = this.props;
        return (
            <div id={displayFlag}  >
                <div className="add">
                    <span>添加任务:</span>
                    <input type="text" placeholder={"搞事情！ 搞事情！搞事情！"} ref={(input) => this.input = input}/>
                    <button onClick={this.add}>保存</button>
                </div>
            </div>
        )
    }
}