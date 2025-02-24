const loginResponse = (data) => {
  return {
    name: data.user.name,
    branch: data.user.branch,
    token: data.token,
  };
};

module.exports = { loginResponse };
