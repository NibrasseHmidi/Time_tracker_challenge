import{SET_LOADING,GET_ALL_TASK_SUCCESS,AJOUT_TASK_SUCCESS,DELETE_TASK_SUCCESS,UPDATE_TASK_SUCCESS,AJOUT_FAIL} from '../constante/taskconst'

const initialState = {
    task: null,
    isLoading: false,
      errors:null,
  };
  export default (state = initialState, { type, payload })=>{
    switch (type) {
      case SET_LOADING:
        return {
          ...state,isLoading:true,errors:null
      }
        case AJOUT_TASK_SUCCESS:
          
            return { ...state,
                task: payload };

            case GET_ALL_TASK_SUCCESS:
            
                return {
                    ...state,
                    isLoading:false,
                    task: payload,
                   
                  };
                 
                  case DELETE_TASK_SUCCESS:
                    return {
                        ...state,
                        task: payload,
                       
                      };
                  
                  case AJOUT_FAIL:
                    return { ...state,isLoading:false, task: null };
                  default:
                    return state;
    }
  };