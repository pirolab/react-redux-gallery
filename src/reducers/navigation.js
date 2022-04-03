let initialState = {currentSlide:0,  dataLength: 0,}

const navigationReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'NEXT': return{
            ...state,
            dataLength : action.dataLength,
            currentSlide : state.currentSlide === action.dataLength - 1 ? 0 : state.currentSlide + 1,
        }
        case 'PREV':
            return {
                ...state,
                dataLength : action.dataLength,
                currentSlide : state.currentSlide === 0 ? action.dataLength - 1 : state.currentSlide - 1,
            }
        case 'BULLET':
            return {
                ...state,
                dataLength : action.dataLength,
                currentSlide :  action.index,
            }
        default:
            return state;
    }
}

export default navigationReducer;