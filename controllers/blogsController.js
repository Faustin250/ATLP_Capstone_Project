
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

    static findOne(req, res) {
        res.json({
            message: 'success',
            data: res.blog,
        });
    }
       
    static async deleteOne(req, res){
            try{
                await res.blog.remove();
                res.json({ message: 'Blog deleted'});
            } catch(err){
                res.status(500).json({message: err.message});
        
            }
        }

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
    
