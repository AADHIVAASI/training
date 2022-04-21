import React from "react";
import "./Person.css";
import Radium from 'radium';

const Person = (props) => {
    const style = {
        '@media (max-width:500px)' : {
            width: '60%'
        }
    }
  return (
    <div className="Person" style={style}>
      <p onClick={props.deleteHandler}>
        I'm {props.name} and I'm {props.age} years old.
      </p>
      {/* <p>{props.children}</p> */}
      <input type="text" onChange={props.change} defaultValue={props.name} 
      style={{width:"inherit"}}/>
    </div>
  );
};

export default Radium(Person);
