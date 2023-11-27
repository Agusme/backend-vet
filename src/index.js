import express from 'express';
import morgan from 'morgan';
import cors from "cors";
import 'dotenv/config'

import './database';
import router from './routes/pacients.routes';
import routerAppointment from './routes/appointments.routes'
const app = express();
app.set('port', process.env.PORT || 4001)
app.listen(app.get('port'), ()=>(
    console.log('estoy en el puerto ' + app.get('port'))
))


app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use('/api-v1', router)
app.use('/api-v1', routerAppointment)