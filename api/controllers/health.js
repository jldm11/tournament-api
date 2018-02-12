'use strict'

var getApiStatus = (req, res) => {
  const msg = 'Tournament-API service is running'
  res.json({status: msg})
}

module.exports = {
  getApiStatus
}
