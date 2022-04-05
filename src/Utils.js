import axios from 'axios';

let Network = {
  fetch: async (path, method, body, isFormData) => {
    let options = {
      method,
      headers: !isFormData
        ? {
            'Content-Type': 'application/json',
          }
        : {
            'Content-Type': 'multipart/form-data',
          },
    };

    if (method.toUpperCase() === 'POST' || method.toUpperCase() === 'PUT')
      options['body'] = JSON.stringify(body);
    try {
      let response = await fetch(path, options);
      return await response.json();
    } catch (e) {
      console.log(e);
      return { success: false };
    }
  },
};

let AppManager = {
  fetchCases: async () => {
    return await Network.fetch('/getCases', 'GET');
  },

  fetchCasesTags: async () => {
    return await Network.fetch('/getCasesTags', 'GET');
  },

  fetchBids: async () => {
    return await Network.fetch('/getBids', 'GET');
  },

  fetchNews: async () => {
    return await Network.fetch('/getNews', 'GET');
  },

  fetchNewsTags: async () => {
    return await Network.fetch('/getNewsTags', 'GET');
  },

  fetchReviews: async () => {
    return await Network.fetch('/getReviews', 'GET');
  },

  fetchEverything: async function () {
    let cases = await this.fetchCases();
    let casesTags = await this.fetchCasesTags();
    let bids = await this.fetchBids();
    let news = await this.fetchNews();
    let newsTags = await this.fetchNewsTags();
    let reviews = await this.fetchReviews();

    return {
      cases,
      casesTags,
      bids,
      news,
      newsTags,
      reviews,
    };
  },

  authAdmin: async (body) => {
    return await Network.fetch('/authAdmin', 'POST', body);
  },

  cases: {
    delete: async (id) => {
      return await Network.fetch('/cases/delete', 'POST', { id });
    },
    create: async (body) => {
      let formData = new FormData();
      console.log(body);

      formData.append('file', body.file);
      formData.append('name', body.name);
      formData.append('moreInfo', body.moreInfo);
      formData.append('description', body.description);
      formData.append('categories', body.categories);

      return await axios.post('/cases/create', 'POST', { formData });
    },
  },

  news: {
    delete: async (id) => {
      return await Network.fetch('/news/delete', 'POST', { id });
    },
    create: async (body) => {
      return await Network.fetch('/news/create', 'POST', body);
    },
  },

  bids: {
    delete: async (id) => {
      return await Network.fetch('/bids/delete', 'POST', { id });
    },
  },
};

export { Network, AppManager };
