import { DELETE_TODO, UPDATE_TODO } from "./actionTypes";

export default  function reducer (state, action) {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          {
            title: action.payload.title,
            status: action.payload.status,
            id: (Math.random() * 1000).toFixed(0),
          },
        ];
    case  DELETE_TODO:
        return state.filter((obj)=>{
            if(obj.id !== action.payload.id){
                return obj
            }
        })

    case UPDATE_TODO :
        return   state.map((obj)=>{
            if(obj.id == action.payload.id){
                return {...obj, status: !obj.status}
            }else{
                return obj
            }
        })  

      default:
        return state;
    }
  };


  let arr =[
    {name : "test", id : 1},
    {name : "test2", id : 2},
    {name : "test3", id : 3},
    {name : "test4", id : 4},
  ]

