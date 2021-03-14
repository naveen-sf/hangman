import axios from 'axios';

const config = {
  baseURL: `${process.env.REACT_APP_API_END_POINT}/api`,
  // timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
};

const apiClient = axios.create(config);

// create request
apiClient.interceptors.request.use(request => request);

// handle response
apiClient.interceptors.response.use(response => response);

apiClient.interceptors.response.use(undefined, error => {
  // Errors handling
  const { response } = error;
  const {
    data: { errorDetails = false },
    data,
    status,
  } = response || {};
  if (data) {
    console.error(new Date(), 'Api Response', status, errorDetails || data);
  }
});

export default apiClient;
