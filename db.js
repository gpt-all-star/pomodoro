const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/pomodoro.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
});

db.serialize(() => {
    db.run('CREATE TABLE sessions(session_id INTEGER PRIMARY KEY, start_time TEXT, end_time TEXT, session_type TEXT)');
});

module.exports = db;
