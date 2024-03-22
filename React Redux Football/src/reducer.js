import { FETCH_CREATE, FETCH_FAILURE, FETCH_SUCCESS, SET_PAGE_TO_FORWARD, SET_PAGE_TO_BACK, SET_PAGE_TO_LAST, SET_PAGE_TO_FIRST } from "./action";

export let mainReducer = (
  state = {
    isLoading: false,
    isError: false,
    footballMatches: [],
  },
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export let pageReducer = (state={page : 1 , isPage : false  } , action)=>{
    switch(action.type){
        case SET_PAGE_TO_FORWARD:
            return  state.page == 1159 ? { ...state ,page : state.page , isPage : true} : {
                ...state,
                page : state.page + 1,
                isPage : false
            }

             
            

        case SET_PAGE_TO_BACK:
        return  state.page == 1 ? { ...state ,page : state.page , isPage : true} : {
                ...state,
                page : state.page - 1,
                isPage : false
            }

        case SET_PAGE_TO_FIRST:
            return {
                ...state,
                page : 1,
                isPage : false
            }

        case SET_PAGE_TO_LAST:
            return {
                ...state,
                page : 1159
            }
        default: return state
    }
}
export let fetchReducer = (
  state = { isLoading: false, isError: false, footballMatches: [] },
  action
) => {
  switch (action.type) {

    case FETCH_CREATE:
        return {
            ...state,
            isLoading : action.payload.isLoad,
            isError : action.payload.isError
        }
    
        case FETCH_SUCCESS:{
            return {
                ...state ,
                isLoading : action.payload.isLoad,
                isError : action.payload.isError,
                footballMatches : action.payload.data
            }
        }
    case FETCH_FAILURE : {
        return {
            ...state,
            isLoading : action.payload.isLoad,
            isError : action.payload.isError

        }
    }


    default:
      return state;
  }
};
