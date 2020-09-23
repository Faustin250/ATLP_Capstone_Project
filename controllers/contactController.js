
import Contact from '../models/contact';

export default class ContactController {

    static async createOne(req, res)  {
                const { name, email, question } = req.body;
                 const questions = new Contact({
                    name,
                    email,
                    question
                 }); 
                 try {
                     const newQuestion = await questions.save();
                     res.status(201).json({
                         message: 'created',
                         data: newQuestion,
                     });
                   } catch(err) {
                    res.status(500).json({
                      err: err.message,
                  })
                }
            }
  }
    
