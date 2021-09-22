const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const mongoose = require('mongoose');

// image
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// image
app.use(cors())

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);


mongoose.set('debug', true);

// // image upload everything here -- need to be cleaned up
// const bodyParser = require('body-parser');
// const fs = require('fs');

// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// });

// const upload = multer({ storage: storage });

// const imgModel = require('./models/Image');

// app.get('/', (req, res) => {
//   imgModel.find({}, (err, items) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('An error occured', err);
//     } else {
//       res.render('imagesPage', { items: items });
//     }
//   });
// });

// app.post('/', upload.single('image'), (req, res, next) => {
//   const obj = {
//     name: req.body.name,
//     desc: req.body.desc,
//     img: {
//       data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//       contentType: 'image/png'
//     }
//   }
//   imgModel.create(obj, (err, item) => {
//     if (err) {
//       console.log(err);
//     } else {
//       // item.save();
//       res.redirect('/');
//     }
//   });
// });


db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

