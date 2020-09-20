
import Contact from '../models/contact';

export default class ContactController {

    static async findAll(req, res) {
        try {
          const questions = await Contact.find();
          res.json({
              message: 'success',
              data: questions,
          });
    
        } catch (err) {
            res.status(400).json({
                error: err.message,
            })
        }
    }
       
    static async deleteOne(req, res){

            try{
                await res.contact.remove();
                res.json({ message: 'Contact deleted'});
            } catch(err){
                res.status(500).json({message: err.message});
        
            }
        }

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
    
