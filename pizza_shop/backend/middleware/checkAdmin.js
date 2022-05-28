const jwt = require('jsonwebtoken');
const User = require('../models/User');

const checkAdmin = async (req,res,next)=>{
    const token = req.cookies.jwt;


    if (token) {
        jwt.verify(token, 'net ninja secret',async (err, decodedToken) => {
            const Admin_id = "628e38fd8dba737fdde8430e"
          if (err) {
            console.log(err.message);
            res.redirect('/login');
          } else {
              
              if(Admin_id==decodedToken.id){
                console.log("admin hai ", decodedToken);
                res.render("secret")
                console.log('good hai !!!!')
            }
            else{
                res.redirect("/smoothies")
                console.log('fkdddf')
            }
            next();
          }
        });
      } else {
        res.redirect('/smoothies');
      }
    };

    module.exports = {checkAdmin}

   

