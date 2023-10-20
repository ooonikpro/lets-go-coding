const assert = require('node:assert');

class HttpClient {
  request(url) {
    return fetch(url).then(res => res.json());
  }
}

class User {
  #httpClient = null;
  #id = -1;

  name = '';
  tokenId = '';
  role = '';

  constructor(id, httpClient) {
    this.#id = id;
    this.#httpClient = httpClient;
  }

  async fetchInfo() {
    const { name, role, tokenId } = await this.#httpClient.request(`/users/${this.#id}`);

    this.name = name;
    this.role = role;
    this.tokenId = tokenId;
  }
}

const createMockUser = (id) => ({
  name: `Ivan ${id}`,
  role: `user ${id}`,
  tokenId: `TokenId: ${id}`
})

const httpClient = {
  request: async (id) => createMockUser(id)
}

const dataBaseClient = {
  request: async (id) => createMockUser(id)
}

// const user = new User(new HttpClient);

// const testFetchInfo = async () => {
//   assert.deepEqual(user.name, '');
//   assert.deepEqual(user.role, '');
//   assert.deepEqual(user.tokenId, '');

//   await user.fetchInfo(1);

//   assert.deepEqual(user.name, mockUser.name);
//   assert.deepEqual(user.role, mockUser.role);
//   assert.deepEqual(user.tokenId, mockUser.tokenId);

//   console.log(user);
// }

// testFetchInfo();





// =================================

// const renderUserInfo = async (id) => {
//   const user = new User(new HttpClient);

//   await user.fetchInfo(id);

//   document.body.innerHTML = `Name: ${user.name}; Role: ${user.role}; TokenId: ${user.tokenId}`;
// }

const renderHTML = (content) => {
  document.body.innerHTML += content;
}

const mockRender = (content) => {
  console.log(content);
}

const renderUserInfo = async (user, renderFn) => {
  renderFn(`Name: ${user.name}; Role: ${user.role}; TokenId: ${user.tokenId}`);
}

const users = [
  new User(1, httpClient),
  new User(2, httpClient),
  new User(3, dataBaseClient),
  new User(4, dataBaseClient),
];

users.forEach(async (user) => {
  await user.fetchInfo();

  renderUserInfo(user, mockRender);
});


