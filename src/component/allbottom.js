import {Component} from "react";
import React from "react";

export default class All extends Component {
    constructor(props){
        super(props);
    }
    showAll =() =>{
        const {todo,displayFlag} = this.props;
        todo.map((x,index) =>{
                document.getElementById(index).style.display = 'inline-block';
        });
        document.getElementById(displayFlag).style.display ='inline-block';
    };
    hasFinished =()=>{
        const {todo,displayFlag} = this.props;
        todo.map((x,index) =>{
            if(x.status === 0){
                document.getElementById(index).style.display = 'inline-block';
            }
            else {
                document.getElementById(index).style.display = 'none';
            }
        });
         document.getElementById(displayFlag).style.display ='none';
    };
    activeTodo =() =>{
        const {todo,displayFlag} = this.props;
        todo.map((x,index) =>{
            if(x.status === 1){
                document.getElementById(index).style.display = 'inline-block';
            }
            else {
                document.getElementById(index).style.display = 'none';
            }

        });
        document.getElementById(displayFlag).style.display ='none';
    };

    clearTodo = () =>{
       this.props.handleClear()
    };

    render() {


        return (
            <div id='bottom'>
                <div className='allButton'>
                    <div className='showAll'>
                        <button className='all' type='button'  onClick={this.showAll}>
                            All
                        </button>
                    </div>
                    <div className='finishedButton'>
                        <button className='finish' type='button' onClick={()=>this.hasFinished()}>

                            Finish
                        </button>
                    </div>
                    <div className='activeButton'>
                        <button className='active' type='button' onClick={() =>this.activeTodo()} >
                            Active
                        </button>
                    </div>
                    <div className='clearButton'>
                        <button className='clear' type='button' onClick={() => this.clearTodo()}>
                            Clear
                        </button>
                    </div>

                </div>
            </div>

        )
    }

}