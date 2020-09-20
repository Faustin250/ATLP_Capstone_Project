import express from 'express';
import Contact from '../models/contact';
import contactController from '../controllers/contactController';
 
const router = express.Router();

// Display questions
router.get('/', contactController.findAll);

// Ask a question
router.post('/create', contactController.createOne);

// Delete a question
router.delete('/:id', getQuestion, contactController.deleteOne);

// Get One middleware
async function getQuestion(req, res, next) {
    let contact;
    try{
        contact = await Contact.findById(req.params.id);
     if(contact == null){
         return res.status(404).json({message: 'Question not found'});
     }
    } catch(err) {

        return res.status(500).json({
            message: err.message,
        });
    }
    res.contact = contact;
    next();
}


module.exports = router;