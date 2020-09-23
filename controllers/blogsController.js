
import Blog from '../models/blog';
export default class BlogsController {

    static async deleteOne(req, res){
       
        try{
            await res.blog.remove();
            res.json({ message: 'Blog deleted'});
        } catch(err){
            res.status(500).json({message: err.message});
    
        }
    }     
  }
    
