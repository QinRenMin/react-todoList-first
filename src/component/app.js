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
            displayFlag:'none',
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
        // todo.map((x) => {
        //   alert('finished'+x.name + '  '+x.status);
        //
        // });
        count = temp;

        this.setState({count});
        this.setState({todo});

    };
    handleDisplay(){}
    show =() =>{
        const  {todo} = this.state;
        alert('show');
        this.setState({todo});
    };
    showFinished =()=>{
        let {todo} = this.state;
        for(let i = 0; i< todo.length;i++){
            if(todo[i].status === 1){
                todo.splice(i,1);
                i--;
            }
        }
        this.setState({todo});

    };
    showActiveTodo(){

    }
    render() {
        const {todo} = this.state;
        const {count} = this.state;

        return (
            <div className='mainDiv'>
                <Top/>

                <List todo={todo} count={count}
                      deleteTodo={this.deleteTodo.bind(this)}
                      finishedTodo={this.finishedTodo.bind(this)}/>

                <Add  addTodo={this.addTodo.bind(this)}
                      handleDisplay ={ this.handleDisplay.bind(this)}/>

                <All todo={todo}
                     show = {this.show.bind(this)}
                     showFinished={this.showFinished.bind(this)}
                     showActiveTodo={this.showActiveTodo.bind(this)}/>


            </div>
        )
    }
}


// class Search extends Component{
//     constructor(props){
//         super(props)
//     }
//
//     render(){
//         return(
//             <div className='searchDiv'>
//                 <div className='imageDiv'>
//
//                 </div>
//                 <div className='inputDiv'>
//                     <input type="text" className ='Input' placeholder={"What needs to be done?"}/>
//
//                 </div>
//             </div>
//         )
//     }
// }





