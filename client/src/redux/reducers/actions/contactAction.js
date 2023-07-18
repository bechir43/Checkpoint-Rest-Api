import axios from "axios"
import { GET_CONTACT, ADD_CONTACT , DELETE_CONTACT } from "./type" 


export const getContact = () =>async (dispatch) =>{
    await axios.get( "/get").then(
        (response) => dispatch({
            type : GET_CONTACT,
            payload: response.data.contact
        })
    )
}

export const addContact = (newContact) =>async (dispatch) =>{
    await axios.post( "/post", newContact)
            dispatch({
            type : ADD_CONTACT,
        })
        dispatch(getContact())
}


export const deleteContact = (id) =>async (dispatch) =>{
    await axios.delete( `/delete/${id}`)
            dispatch({
            type : DELETE_CONTACT,
        })
        dispatch(getContact())

}