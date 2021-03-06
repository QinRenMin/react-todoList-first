import {Component} from "react";
import React from "react";

export  default class List extends Component {
    constructor(props) {
        super(props);
    }
    change = (index) => {

        document.getElementById(index).style.background = 'greenyellow';
    };
    over = (index) => {
        document.getElementById(index).style.background = 'lightskyblue';
    };

    delete = (x) => {
        //提示
        if(window.confirm('确认删除 '+(x.name)+' 任务嘛')){
            this.props.deleteTodo(x);
        }

    };
    finished = (x, index) => {
        let input = document.getElementsByClassName(index)[0];

        if (input.name === '0') {

            document.getElementById(index).style.textDecoration='line-through';
            input.name = '1';
        }
        else {

            document.getElementById(index).style.textDecoration='none';
            input.name = '0';
        }
        this.props.finishedTodo(x, input.name);
    };

    render() {
        const {todo} = this.props;
        const {count} = this.props;

        let flag = 0;
        return (
            <div className='ListDiv'>
                <ul className='List' >
                    {
                        todo.map((x, index) => {
                            return <li className='show' key={index} id={index} onMouseOver={() => this.change(index)}
                                       onMouseOut={() => this.over(index)}>

                                <span className='Span' >
                                    <input type="checkbox" className={index} name={flag} onClick={() => this.finished(x, index)}/>
                                    <span contentEditable='true' id='edit' >{x.name}</span>
                                    <a href="#" className='a_save' onClick={()=> this.delete(x,index)}> 删除</a>
                                </span>
                            </li>
                        })
                    }
                    <li>
                        <span className='total'>{count}完成/{todo.length}总数</span>
                    </li>
                </ul>
            </div>
        )
    }
}