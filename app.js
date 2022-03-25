const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const usersController = require('./controllers/ussers');
usersController.registerUser('bettatech', '1234');
usersController.registerUser('mastermind', '4321');

require('./auth')(passport);

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.get('/', (req, res) => {
    // req es la repuest, la peticion
    // res es la repuesta
    res.status(200).send('Hello World!')
});

app.post('/login', (req, res) => {
    if (!req.body) {
        return res.status(400).json({message: 'Missing data'});
    } else if (!req.body.user || !req.bodypassword){
        return res.status(400).json({message: 'Missing data'});
    }
    //Comprobar las credenciales
    usersController.checkUserCredentials(req.body.user, req.body.password, (err, result) => {
        // Si no son validas, error
        if (err || !result) {
            return res.status(401).json({message: 'Invalid credentials'})
        }
    // Si son validas, generamos un JWT y lo devolvemos
        const token = jwt.sign({userId: result},   'secretPassword');
        res.status(200).json(
            {token: token}
        )
    })
});

app.post('/team/pokemons', () => {
    res.status(200).send('Hello World!')
});

app.get('/team', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.status(200).send('Hello World!')
});

app.delete('/team/pokemons/:pokeid', () => {
    res.status(200).send('Hello World!')
});

app.put('/team', () => {
    res.status(200).send('Hello World!')
});

app.listen(port, () => {
    console.log('Server started at port 3000');
});

exports.app = app;