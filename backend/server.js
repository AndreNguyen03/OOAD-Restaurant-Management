const app = require('../backend/src/app');
const PORT = 3000;

const server = app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})