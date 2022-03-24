import { combineReducers } from "redux"

const initialPanelState = {
  markButtonDisabled: true,
  revealButtonDisabled: true,
  panelTarget: "",
}

const cell = {
  view: "#",
  value: "0",
  used: false,
  marked: false,
}




const initialboard = [[cell,cell,cell],[cell,cell,cell],[cell,cell,cell]]

export const boardReducer = (state=initialboard,action) =>{
  switch(action.type){

    case 'updateBoard':{
      return action.payload 
    }

    case 'resetBoard':{
      return initialboard
    }

    default:
      return state
  }
}

export const panelReducer = (state = initialPanelState, action) => {
    
  switch (action.type) {
      case 'enabled': {
        return { ...state,
          markButtonDisabled: false,
          revealButtonDisabled: false,
          panelTarget: action.payload,
        }
      }

      case 'disabled': {
        return { ...state,
          markButtonDisabled: true,
          revealButtonDisabled: true,
          panelTarget: "",
        }
      }

      case 'enabledOnlyMark': {
        return { ...state,
          markButtonDisabled: false,
          revealButtonDisabled: true,
          panelTarget: action.payload,
        }
      }

      case 'disabledOnlyMark': {
        return { ...state,
          markButtonDisabled: true,
          revealButtonDisabled: true,
          panelTarget: "",
        }
      }

      case 'resetPanel':{
        return initialPanelState
      }

      default: {
        return state
      }
  
    }
  
  }

  export const reducers = combineReducers({
    panel: panelReducer,
    board: boardReducer,
  })