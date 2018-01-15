const GET_TICKETS_START = 'tickets/GET_TICKETS_START';
const GET_TICKETS_SUCCESS = 'tickets/GET_TICKETS_SUCCESS';
const GET_TICKETS_FAILED = 'tickets/GET_TICKETS_FAILED';

export const getTickets = () => ({
  type: GET_TICKETS_START,
});

export const getTicketsSuccess = data => ({
  type: GET_TICKETS_SUCCESS,
  payload: data,
});

export const getTicketsFailed = error => ({
  type: GET_TICKETS_FAILED,
  payload: error,
});

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TICKETS_START:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case GET_TICKETS_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        data: action.payload,
      };

    case GET_TICKETS_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
