//use nodemailer to send email from gmail   
// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: '
//     pass: '
//   }
// });
// var mailOptions = {
//   from: '
//   to: '
//   subject: '
//   text: '
// };
// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//add to cart route
// app.post('/addtocart', function(req, res){
//     var product = req.body;
//     var cart = new Cart(req.session.cart ? req.session.cart : {});
//     cart.add(product, product.id);
//     req.session.cart = cart;
//     res.redirect('/');
//     });
// //remove from cart route
// app.get('/remove/:id', function(req, res){
//     var cart = new Cart(req.session.cart ? req.session.cart : {});
//     cart.remove(req.params.id);
//     req.session.cart = cart;
//     res.redirect('/shopping-cart');
//     }
// );
// //what is Cart here
// app.get('/shopping-cart', function(req, res){
//     if(!req.session.cart){
//         return res.render('shopping-cart', {products: null});
//     }
//     var cart = new Cart(req.session.cart);
//     res.render('shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
// }
// );

//commercejs increment button to cart route
// app.get('/cart/:id', function(req, res){
//     var productId = req.params.id;
//     var cart = new Cart(req.session.cart ? req.session.cart : {});
//     Product.findById(productId, function(err, product){
//         if(err){
//             return res.redirect('/');
//         }
//         cart.add(product, product.id);
//         req.session.cart = cart;
//         console.log(req.session.cart);
//         res.redirect('/');
//     });
// });
