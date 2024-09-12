import express from 'express';
import messages from '../routes/messages';
import upload from '../routes/upload';
import firstTimer from "../routes/firstTimer";
import enquiry from "../routes/enquiry";
import blog from "../routes/blog";
import member from "../routes/member";
function routes(app: any){
    app.use(express.json());
    app.use('/api/v1/messages', messages)
    app.use('/api/v1/upload', upload)
    app.use('/api/v1/first-timer', firstTimer)
    app.use('/api/v1/enquiry', enquiry)
    app.use('/api/v1/blog', blog)
    app.use('/api/v1/member', member)
}

export default routes;