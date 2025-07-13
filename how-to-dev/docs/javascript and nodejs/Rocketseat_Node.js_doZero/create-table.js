import { sql } from './db.js'

sql`
    CTREATE TABLE videos {
        title TEXT,
        description TEXT,
        duration INTEGER
    };
`.then(() => {
    console.log('Table created')
})