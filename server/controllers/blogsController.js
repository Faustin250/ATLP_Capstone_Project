
import Blog from '../models/blog';
export default class BlogsController {
    
    static async updateOne(req, res) {
        const { title, intro, content, date } = req.body;
      
        if (title != null) {
          res.blog.title = title;
        }
        if (intro != null) {
          res.blog.intro = intro;
        }
        if (content != null) {
          res.blog.content = content;
        }
        if (date != null) {
          res.blog.date = date;
        }
        
        try {
          const updatedBlog = await res.blog.save();
          res.json({
            message: 'updated',
            data: updatedBlog,
          });
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      }
       
  }
    
