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
    handleChange =()=>{
        let  d = document.getElementsByClassName('addDiv');
        if(d.display === 'inline-block'){
            d.display = 'none';
        }
        else d.display ='inline-block';
    };
    render() {
        return (
            <div className="addDiv" onChange={this.handleChange.bind(this)}>
                <div className="add">
                    <span>添加任务:</span>
                    <input type="text" placeholder={"搞事情！ 搞事情！搞事情！"} ref={(input) => this.input = input}/>
                    <button onClick={this.add}>保存</button>
                </div>
            </div>
        )
    }
}