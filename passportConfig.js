// Powered by PScan-Authenticator
const LocalStrategy = require("passport-local").Strategy;
const{ pool }=require("./dbConfig");
const bcrypt=require("bcrypt");


function initialize(passport){
const authenticateUser=(email, done)=>{

    pool.query(
        `SELECT * FROM SFU_Allowed WHERE username =$1`,
        [email], 
        (err,results)=>{
            if(err){
                throw err;
            }

            console.log(results.rows);

            if(results.rows.length>0){
                return done(null, user);
            }
            else{
                return done(null, false, {message:"Oops! Email is not registered"});
            }

        }
    );
};
    passport.use(
        new LocalStrategy({
            usernameField: "email",
        }, 
        authenticateUser
        )
    );

    passport.serializeUser((user, done)=> done(null, user.email));

    passport.deserializeUser((email, done)=>{
        pool.query(`SELECT * FROM SFU_Allowed WHERE username =$1`,[email],(err, results)=>{
            if (err){
                throw err
            }
            return done(null,results.rows[0]);
        });
    });



}


module.exports = initialize;