'use strict'

// Status of the API
var getApiStatus = (req, res) => {
  const msg = 'Tournament-API service is running'
  res.json({status: msg})
}

module.exports = {
  getApiStatus
}
