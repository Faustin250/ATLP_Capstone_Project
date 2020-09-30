 const Contact = require('../models/contact');
 const mongoose = require('mongoose');

 exports.contacts_get_all = (req, res, next) => {
     Contact.find()
         .exec()
         .then(docs => {
             const response = {
                 count: docs.length,
                 Contact: docs.map(doc => {
                     return {
                         name: doc.name,
                         email: doc.email,
                         question: doc.question,
                         _id: doc._id,

                     }
                 })
             }
             res.status(200).json(docs);
         })
         .catch(err => {
             console.log(err);
             res.status(500).json({
                 error: err
             });
         });
 }

 exports.contacts_create_one = (req, res, next) => {
     const contact = new Contact({
         _id: new mongoose.Types.ObjectId(),
         name: req.body.name,
         email: req.body.email,
         question: req.body.question
     });
     contact.save().then(result => {
         console.log(result);
         res.status(201).json({
             message: 'question sent',
             QuestionsSent: result
         });

     }).catch(err => {
         console.log(err)
         res.status(500).json({
             error: err
         });
     });
 }
 exports.contacts_delete_one = (req, res, next) => {
     const id = req.params.contactId
     Contact.remove({
             _id: id
         })
         .exec()
         .then(result => {
             res.status(200).json({
                 message: 'question deleted'
             })

         })
         .catch(err => {
             console.log(err);
             res.status(500).json({
                 error: err
             });
         });
 }