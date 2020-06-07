const {npApiKey} = require('../settings/setting');

function statusDocument(req, res) {
    res.send('test status');
}

module.exports = {
    statusDocument,
}