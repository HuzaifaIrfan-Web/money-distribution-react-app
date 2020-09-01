import React from 'react';


const Results = (props) => {

    let aPerson;

    let TotalMoney=0;

    let TotalPerson=0;

    


    for(aPerson of props.PersonsList){
        // console.log(aPerson)
        TotalMoney = TotalMoney + aPerson.money
        TotalPerson = TotalPerson + 1
    }

    let PersonsDifference=[]

    let mustspent=TotalMoney/TotalPerson

    for(aPerson of props.PersonsList){
        let difference=mustspent-aPerson.money

        if (difference < 0){
            difference= -(difference) 
            aPerson.difference=difference
            aPerson.give=true

        }else{

            aPerson.difference=difference
            aPerson.give=false

        }

        PersonsDifference.push(aPerson)
    }




    const ResultsListView = PersonsDifference.map( (aPerson,index) =>{
        return(
            <tr key={index}>
                
                    <td>{aPerson.name}
                    {aPerson.give ?
                        <span> Must Get </span>
                    :
                        <span> Must Give </span>
                    }
                {aPerson.difference}
                </td>
               
            </tr>
        )
      })
  



    // const style={
    //     display:'inline-block',
    //     padding:'16px',
    //     margin:'16px',
    //     border:'1px solid black',
    //     textAlign:'center'
    // }


    return(

        <div className="Results">
            
            <div className="jumbotron">

            <h2>Results Section</h2>
    <h4>Total Money Spent is {TotalMoney}</h4>
    <h4>Number of Persons are {TotalPerson}</h4>
    <h4>Each Person Must Spend {mustspent}</h4>
    </div>


    <table class="table table-hover">
    <thead>
      <tr>
        <th>
            <h3 align="center">
                Distribution Table
            </h3>
        </th>
      </tr>
    </thead>
    <tbody>

                {ResultsListView}
                
    </tbody>
  </table>
            
        </div>

    )


}


export default Results;