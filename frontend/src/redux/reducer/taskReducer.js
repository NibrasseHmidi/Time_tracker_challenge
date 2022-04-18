import{GET_ALL_TASK_SUCCESS,AJOUT_TASK_SUCCESS,DELETE_TASK_SUCCESS,AJOUT_FAIL} from '../constante/taskconst'

const initialState = {
    task: null,
  };
  export default (state = initialState, { type, payload })=>{
    switch (type) {
        case AJOUT_TASK_SUCCESS:
         
            return { ...state,  task: payload };

            case GET_ALL_TASK_SUCCESS:
                return {
                    ...state,
                    task: payload,
                   
                  };
                  case DELETE_TASK_SUCCESS:
                    return {
                        ...state,
                        task: payload,
                       
                      };
                    
                  case AJOUT_FAIL:
                    return { ...state, task: null };
                  default:
                    return state;
    }
  };