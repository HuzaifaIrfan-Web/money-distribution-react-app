import React, {Component} from 'react';
// import logo from './logo.svg';
// import './Persons.css';


// import Validation from "./Validation/Validation"
import Persons from "../../components/Persons/Persons"

import Results from "../../components/Results/Results"


class StateManager extends Component{

  state={
    userNameInput : "",
    moneyInput : 0,

    PersonsList:[]
  }


  inputChangeHandler = (event) =>{
    this.setState({userNameInput: event.target.value })
  }

  moneyinputChangeHandler = (event) =>{
    var moneychange=parseInt(event.target.value)

    if (isNaN(moneychange)){
      moneychange=0
    }

    this.setState({moneyInput: moneychange })
  }

  addUserHandler= (event) =>{

    if(this.state.userNameInput !== ""){

    let temp= [...this.state.PersonsList]
    temp.push({name:this.state.userNameInput , money :this.state.moneyInput})
    


    this.setState({PersonsList:temp})
    this.setState({userNameInput:''})
    this.setState({moneyInput:0})

    }


    // this.setState({userInput: event.target.value })
  }

  deletePersonHandler = (index) =>{
    let temp= [...this.state.PersonsList]
    temp.splice(index,1)

    this.setState({PersonsList:temp})
   
  }


  render(){


    return (
      <div className="StateManager row">
        

      <div id="InputView" className="col-lg-6">

      <div className="jumbotron">
            <h2>Input Section</h2>
        </div>
                  <div id="InputForm">

                                      <div className="form-group row">

                                            <div className="col-md-4">

                                                  <label htmlFor="ex1">Person Name</label>

                                                  <input id="ex1" type="text" className="form-control" name="PersonName"
                                                      value={this.state.userNameInput}
                                                      onChange={this.inputChangeHandler}
                                                      />

                                              </div>


                                              <div className="col-md-4">

                                          <label htmlFor="ex2">Money Spent</label>  

                                                <input id="ex2" type="text" className="form-control" name="PersonMoney"
                                                value={this.state.moneyInput}
                                                onChange={this.moneyinputChangeHandler}
                                                />

                                          </div>

                                        <div className="col-md-4">
                                        <label htmlFor="ex3">Add Person</label>  
                                              <button id="ex3" type="submit" onClick={this.addUserHandler} className="btn btn-primary form-control" >Add Person</button>
                                        </div>



                                      
                                      </div>


                    </div>



                    <div id="PersonsView">
                        {/* <h2>Persons</h2> */}
                      

                        <Persons PersonsList={this.state.PersonsList} deletePersonHandler={this.deletePersonHandler}/>

                      </div>



        </div>

          <div id="ResultsView" className="col-lg-6">
                
                {/* <h2>Results</h2> */}
          

                <Results PersonsList={this.state.PersonsList} />
            

            </div>



        

      </div>


    );

  }

}


export default StateManager;
