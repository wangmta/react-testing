const axiosMock = jest.genMockFromModule('axios');

let mockResponse = {
  data: {
    stores: [{ location: 'test location', address: 'test address' }]
  }
};

axiosMock.get.mockImplementation(req);

function req() {
  return new Promise((resolve, reject) => {
    axiosMock.delayTimer = setTimeout(() => {
      resolve(mockResponse);
    }, 100);
  });
}

module.exports = axiosMock;
