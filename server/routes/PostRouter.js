import Authentication from '../auth/auth';
import passportService from '../services/passport';
import passport from 'passport';

const requireAuth = passport.authenticate('jwt',{session:false});


const Post = (app) => {

    app.get('/post',requireAuth,function (req,res){
        res.send({hi:'there'});
    });

    app.post('/post',requireLogin,(req,res)=>{

    });

    app.put('/post',requireLogin,(req,res)=>{

    });

    app.delete('/post',requireLogin,(req,res)=>{

    });

    app.get('/pstlikes',requireLogin,(req,res)=>{

    });

    app.post('/pstlikes',requireLogin,(req,res)=>{

    });

    app.get('/pstcom',requireLogin,(req,res)=>{

    });

    app.post('/pstcom',requireLogin,(req,res)=>{

    });


}

export default Post;
