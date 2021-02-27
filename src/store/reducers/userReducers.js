const initState = {
    users:[{
        id:1,
        name:"shivam",
        address:"rajkot"
    }]
}
const userReducer = (state=initState,action) => {
    switch(action.type){
        case 'ADD_USER':
            return{users:[action.payload,...state.users]}
        
        default:
            return state;
    }  
}

export default userReducer;