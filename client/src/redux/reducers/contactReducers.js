const {GET_CONTACT} = require("./actions/type")


export const contactReducers = (state= [],{type, payload})=> {
    
    switch (type) {
        
        case GET_CONTACT:
            return  payload
            default :
            return state
    }

}

export default contactReducers