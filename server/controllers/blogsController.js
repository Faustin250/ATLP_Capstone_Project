
import Blog from '../models/blog';
export default class BlogsController {

    static async findAll(req, res) {
        try {
          const blogs = await Blog.find();
          res.json({
              message: 'success',
              data: blogs,
          });
        } catch (err) {
            res.status(400).json({
                error: err.message,
            })
        }
    
    }
       
  }
    
