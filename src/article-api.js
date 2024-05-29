import axios from 'axios';

export async function fetchData(searchQuery, page) {
  axios.defaults.baseURL = 'http://hn.algolia.com/api/v1';

  const response = await axios.get('/search', {
    params: {
      query: searchQuery,
      hitsPerPage: 10,
      page,
    },
  });
  return response.data.hits;
}
