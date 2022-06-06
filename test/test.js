const request = require('supertest');
const app = require('../index');

describe('GET /elearning', function() {
    it('List favourite author', function(done) {
        request(app)
        .get('/elearning')
        .expect(200, done);
    });
});