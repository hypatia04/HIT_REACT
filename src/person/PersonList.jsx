import React from "react";
import { PersonData } from "./DataPerson";
import Person from "./Person";

const PersonList = () => {
    return (
        <div>
            {
                PersonData.map((item) =>
                 <Person key = {item.id} id={item.id}
                  name = {item.name} number ={item.number} 
                  age = {item.age}>
                  </Person>

                
                )
            }
        </div>
    )

}
export default PersonList