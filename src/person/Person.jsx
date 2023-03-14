import React from "react";
 import  "./Person.css";


const Person = (props) =>{
    console.log(props);

        return(

            <div>
                <h1>THÔNG TIN CON NGƯỜI</h1>
                <ul>
                    <li>Mã : {props.id}</li>
                    <li>Tên : {props.name}</li>
                    <li>Số điện thoại : {props.number}</li>
                    <li>Tuổi : {props.age}</li>
                </ul>
            </div>
        )

}
export default Person;