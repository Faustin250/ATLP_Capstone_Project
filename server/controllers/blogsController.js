
import Blog from '../models/blog';
export default class BlogsController {

    static findOne(req, res) {
        res.json({
            message: 'success',
            data: res.blog,
        });
    }
       
  }
    
