import { useReducer } from "react"


const formReducer=()=>{

}
export const useForm=(initInputs,initFormsValid)=>{

        const [formState,dispatch]= useReducer(formReducer,{
            inputs:initInputs,
            isFromValid:initFormsValid
        });
        const onInputHandler=(value,isValid)=>{
            dispatch({
                type:'INPUT_VHANGE',
                value,
                isValid
            }) 
        }
}