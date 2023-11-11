import React, { useEffect, useReducer } from 'react';
import './Input.css'
import validator from '../../validators/validator';

const inputReducer=(state,action)=>{
    switch (action.type) {
        case "CHANGE":{
            return {
                ...state,
                value:action.value,
                isValid:validator(action.value,action.validations)
            }
        }
        default:
           {
            return state;
           }
    }
}

const Input = (props) => {
   
    const [mainInput,dispatch]=useReducer(inputReducer,{
        value:'',
        isValid:false,

    })
const {value,isValid}=mainInput;
const {id}=props;
useEffect(()=>{
    props.onInputHandler(id,value,isValid);
},[value])
    const onCHangehandler=(event)=>{

        dispatch({
            type:"CHANGE",
            value:event.target.value,
            validations:props.validations,
            isValid:true
        })
    }
    const element=props.element ==='input' ?(
        <input 
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.className} ${mainInput.isValid ? "success" : 'error'}`}
        onChange={onCHangehandler}
        value={mainInput.value}
        
        />
     )
     :
     (
        <textarea
        placeholder={props.placeholder}
        className={`${props.className} ${mainInput.isValid ? "success" : 'error'}`}
        onChange={onCHangehandler}
        value={mainInput.value}
        
         />
         )
    return (
        <>
        {element}
      </>
    );
};

export default Input;