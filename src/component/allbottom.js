import {Component} from "react";
import React from "react";

export default class All extends Component {
    constructor(props){
        super(props);
    }
    showAll =() =>{
         alert('zz');
        this.props.show();
    };
    hasFinished =()=>{

        this.props.showFinished();
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
                        <button className='active'>
                            Active
                        </button>
                    </div>
                    <div className='clearButton'>
                        <button className='clear'>
                            Clear
                        </button>
                    </div>

                </div>
            </div>

        )
    }

}