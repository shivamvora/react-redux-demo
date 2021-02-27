const initState = {
    users:[{
        id:1,
        name:"shivam",
        address:"rajkot"
    }]
}
const userReducer = (state=initState,action) => {
    switch(action.type){
        default:
            return state;
    }  
}

export default userReducer;