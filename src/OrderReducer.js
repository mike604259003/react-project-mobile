const OrderReducer = (state = [] , action )=>{

    switch(action.type){
        case 'ADD_FOOD':
            return state.concat([action.data]);
        case 'DELETE_FOOD':
            return state.filter((order)=> order.id !== action.id);
        case 'EDIT_COMMENT':
            return state.map((comment)=>comment.id === action.id ? {...comment,editing:!comment.editing}:comment)
         case 'UPDATE':
            return state.map((order) =>{
                if(order.id === action.id){
                    return {
                        ...order,
                        name:action.data.name,
                        amount:action.data.amount,
                        
                    }
                } else return order;
            })
        case "DESTROY_SESSION":
              return state = undefined; 
        default: return state;
    }

}
export default OrderReducer;