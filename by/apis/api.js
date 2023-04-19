function getRequest(url, data) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: url,
      method: 'GET',
      data: data,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}

export default {
  getRequest
}