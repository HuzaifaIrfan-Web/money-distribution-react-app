import React from 'react';


const Persons = (props) => {




    const PersonsListView = props.PersonsList.map( (aPerson,index) =>{
        return(
            <tr key={index}>
                    
                    <td>
                    {aPerson.name}
                    </td>
                    
                        <td>
                    {aPerson.money}
                    </td>


                <td>
                    <button onClick={() => props.deletePersonHandler(index)} className="btn btn-danger" >Delete</button>
                    </td>
                    
   

      </tr>
  
        )
      })
  




    return(

<div className="Persons">


        <table class="table table-hover">
        <thead>
          <tr>
            <th>
                <h3 align="center">
                    Name
                </h3>
            </th>
            <th>
                <h3 align="center">
                    Money Spent
                </h3>
            </th>
            <th>
                <h3 align="center">
                    Delete
                </h3>
            </th>
          </tr>
        </thead>
        <tbody>

        {PersonsListView}



      </tbody>
  </table>

        



        </div>

    )


}


export default Persons;