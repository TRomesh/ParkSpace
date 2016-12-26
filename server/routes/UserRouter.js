import Authentication from '../auth/auth';

const user = (app) => {
    app.post('/signup',Authentication.signup);
}

export default user;
