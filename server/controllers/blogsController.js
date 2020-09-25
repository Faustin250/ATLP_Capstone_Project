
import Blog from '../models/blog';
export default class BlogsController {
    
    static async createOne(req, res)  {
        const { title, intro, content, date } = req.body;
         const blogs = new Blog({
             title,
             intro,
             content,
             date,
         }); 
         try {
             const newBlog = await blogs.save();
             res.status(201).json({
                 message: 'created',
                 data: newBlog,
             });
           } catch(err) {
            res.status(500).json({
              err: err.message,
          })
        }
    }
       
  }
    
