const fetchLoading = () => ({
  type: 'FETCH_LOADING',
});

const fetchSuccess = (payload) => ({
  type: 'FETCH_SUCCESS',
  payload: { data: payload },
});

const fetchErrors = (payload) => ({
  type: 'FETCH_FAILURE',
  payload: { error: payload },
});

const clearData = () => ({
  type: 'CLEAR_DATA',
});

export { fetchLoading, fetchSuccess, fetchErrors, clearData };
