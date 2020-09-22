// import Blog from '../models/blog';

// // Get One middleware
// async function getBlog(req, res, next) {
//     let blog;
//     try{
//      blog = await Blog.findById(req.params.id);
//      if(blog == null){
//          return res.status(404).json({message: 'Sign not found'});
//      }
//     } catch(err) {
//         return res.status(500).json({
//             error: err.message,
//         });
//     }
//     res.blog = blog;
//     next();
// }

// export default getBlog;