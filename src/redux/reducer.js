const initialState = {
  data: null,
  isLoading: false,
  error: null,
  isClear: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LOADING':
      return {
        ...state,
        isLoading: true,
        isClear: false,
      };
    case 'FETCH_SUCCESS':
      return {
        isLoading: false,
        error: null,
        data: action.payload.data,
        isClear: false,
      };
    case 'FETCH_FAILURE':
      return {
        isLoading: false,
        error: action.payload.error,
        data: null,
        isClear: false,
      };
    case 'CLEAR_DATA':
      return {
        ...state,
        data: null,
        isClear: true,
      };
    default:
      return state;
  }
};

export default reducer;
