const initialState = {
  isLoggedIn: false,
  user: '',
  loading: true
};

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOADING':
      return {...state, loading: false}
    case 'LOGIN':
      return {...state, isLoggedIn: true, loading: false}
    case 'LOGOUT':
      return {...state, isLoggedIn: false}
    default:
      return state
  }
};
