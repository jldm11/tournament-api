'use strict'

// Status of the API service
var getApiStatus = (req, res) => {
  const msg = 'Tournament-API service is running'
  res.json({status: msg})
}

module.exports = {
  getApiStatus
}

//error test build when merge to dev
