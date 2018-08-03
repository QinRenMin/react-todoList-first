import React, {Component} from 'react';
import Top from "./top";
import List from "./list";
import Add from "./add";
import All from "./allbottom";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [
                {
                    name: '打字',
                    status: 1 //表示没有做
                },
                {
                    name: '总结',
                    status: 1
                },
                {
                    name: '睡觉',
                    status: 1
                },
                {
                    name: '吃饭',
                    status: 1
                }
            ],
            count: 0,
            displayFlag:'addDiv',
                  };

    }

    addTodo =(tdo) => {
         let {todo} = this.state;

        todo.push({name: tdo, status: 1});

        this.setState(todo);
    };

    deleteTodo =(x) => {
        const {todo} = this.state;
        let index = todo.indexOf(x);
        if (index > -1&&x.status === 1) {
            todo.splice(index, 1);
        }
        if(x.status === 0){
            alert('无法删除已完成事项');
        }
        this.setState(todo);
    };

    finishedTodo =(x, flag)=> {
        let {todo} = this.state;
        let {count} = this.state;
        let temp = count;
        let index = todo.indexOf(x);
        if (flag === '1') {
            todo[index].status = 0;
            temp++;
        }
        else {
            todo[index].status = 1;
            temp--;
        }
        count = temp;

        this.setState({count});
        this.setState({todo});

    };
    handleClear =() =>{
      let {count} = this.state;
      let {todo} = this.state;
      const {displayFlag} = this.state;
      count = 0;
      todo = [];
      this.setState({count});
      this.setState({todo});
      document.getElementById(displayFlag).style.display ='inline-block';
    };

    render() {
        const {todo} = this.state;
        const {count} = this.state;
        const {displayFlag} = this.state;
        return (
            <div className='mainDiv'>
                <Top/>

                <List todo={todo} count={count}
                      deleteTodo={this.deleteTodo}
                      finishedTodo={this.finishedTodo}/>

                <Add  addTodo={this.addTodo} displayFlag ={displayFlag}/>

                <All todo={todo} count={count }
                     displayFlag ={displayFlag}
                     handleClear = {this.handleClear}/>
            </div>
        )
    }
}


