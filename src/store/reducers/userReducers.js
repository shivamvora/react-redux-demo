const initState = {
    users: [{
        id: '1',
        name: "shivam",
        address: "rajkot"
    },
    {
        id: '2',
        name: "Jemin Bhai Patel",
        address: "Surat"
    }

    ]
}
const userReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case 'ADD_USER':
            return { users: [action.payload, ...state.users] }
        case 'DELETE_USER':
            const newUsers = state.users.filter( user => user.id !== action.id )
            return { users: newUsers }

        default:
            return state;
    }
}

export default userReducer;