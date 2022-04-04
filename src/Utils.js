let Network = {
  fetch: async (path, method, body) => {
    let options = {
      method,
      headers: {
        'Content-Type': 'application/json',
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
  },

  news: {
    delete: async (id) => {
      return await Network.fetch('/news/delete', 'POST', { id });
    },
  },

  bids: {
    delete: async (id) => {
      return await Network.fetch('/bids/delete', 'POST', { id });
    },
  },
};

export { Network, AppManager };
