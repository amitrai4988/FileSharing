import express from 'express';
import router from './routes/routes.js'
import cors from 'cors';
import DBConnection from './Database/db.js';

const app = express();
app.use(cors());
app.use('/',router)
const PORT =process.env.PORT ||8000;
DBConnection();
app.listen(PORT,()=>console.log(`server is running on PORT ${PORT}`));//ager sever start ho jata hai to uske bad kucch krna hai to hmm kr skte hai