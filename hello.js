//make a route to authenticate the user by passport and then redirect to the home page
// app.get('/login', (req, res) => res.render('login'));
// app.post('/login', passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login',
//   failureFlash: true
// }));
// app.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// }
// );
// app.get('/register', (req, res) => res.render('register'));
// app.post('/register', (req, res) => {
//   const { name, email, password, confirmPassword } = req.body;
//   let errors = [];
//   if (password !== confirmPassword) {
//     errors.push({ msg: 'Passwords do not match' });
//   }
//   if (password.length < 6) {
//     errors.push({ msg: 'Password should be at least 6 characters' });
//   }
//   if (errors.length > 0) {
//     res.render('register', {
//       errors,
//       name,
//       email,
//       password,
//       confirmPassword
//     });
//   } else {
//     User.findOne({ email: email }).then(user => {
//       if (user) {
//         errors.push({ msg: 'Email already exists' });
//         res.render('register', {
//           errors,
//           name,
//           email,
//           password,
//           confirmPassword
//         });
//       } else {
//         const newUser = new User({
//           name,
//           email,
//           password
//         });
//         bcrypt.genSalt(10, (err, salt) => {
//           bcrypt.hash(newUser.password, salt, (err, hash) => {
//             if (err) throw err;
//             newUser.password = hash;
//             newUser.save().then(user => {
//               req.flash('success_msg', 'You are now registered and can log in');
//               res.redirect('/login');
//             }
//             ).catch(err => console.log(err));
//           });
//         });
//       }
//     });
//   }
// }
// );
// app.get('/profile', requireAuth, (req, res) => res.render('profile'));
// app.get('/edit-profile', requireAuth, (req, res) => res.render('edit-profile'));
// app.post('/edit-profile', requireAuth, (req, res) => {
//   const { name, email } = req.body;
//   User.findByIdAndUpdate(req.user.id, { name, email }).then(() => {
//     req.flash('success_msg', 'Profile updated successfully');
//     res.redirect('/edit-profile');
//   }
//   ).catch(err => console.log(err));
// }
// );
// app.get('/change-password', requireAuth, (req, res) => res.render('change-password'));
// app.post('/change-password', requireAuth, (req, res) => {
//   const { oldPassword, newPassword, confirmNewPassword } = req.body;
//   User.findById(req.user.id).then(user => {
//     bcrypt.compare(oldPassword, user.password, (err, isMatch) => {
//       if (err) throw err;
//       if (isMatch) {
//         if (newPassword === confirmNewPassword) {
//           bcrypt.genSalt(10, (err, salt) => {
//             bcrypt.hash(newPassword, salt, (err, hash) => {
//               if (err) throw err;
//               user.password = hash;
//               user.save().then(user => {
//                 req.flash('success_msg', 'Password updated successfully');
//                 res.redirect('/change-password');
//               }
//               ).catch(err => console.log(err));
//             });
//           });

//         } else {
//           req.flash('error_msg', 'New password and confirm new password do not match');
//           res.redirect('/change-password');
//         }
//       } else {
//         req.flash('error_msg', 'Old password is incorrect');
//         res.redirect('/change-password');
//       }
//     });
//   }
//   ).catch(err => console.log(err));
// }
// );
