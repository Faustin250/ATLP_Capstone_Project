let mongoose = require("mongoose");
let Blog = require("../models/blog");
let Contact = require("../models/contact");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();
chai.use(chaiHttp);
//let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVrdW5kaW1hbmFAZ21haWwuY29tIiwidXNlcklkIjoiNWY3MzBhZDlkMThlYzIxMmZjN2RhNGJmIiwiaWF0IjoxNjAxNTQ2NDMwLCJleHAiOjE2MDE1NTAwMzB9.CoHK1A3XUHVI1uVCTMzT0ii6g7wRrSG-A54FWAC-nRk'

describe("Blogs API", () => {
  /**
   * Test the GET (all the blogs) route
   */
  describe("/GET /blogs", () => {

    it("it should GET all the blogs", (done) => {
      chai
        .request(server)
        .get("/blogs")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          //res.body.length.should.be.eql(8);
          done();
        })
    })

  })

  /*
   * Test the /POST route
   */
  describe("/POST /blogs/create", () => {
    it("it should send the blog post to the database", (done) => {
      let blog = {
        title: "first blog",
        intro: "NodeJs testing",
        content: "Testing my app using mocha & chai",
      };
      chai
        .request(server)
        .post("/blogs/create")
        // .set({
        //   "Authorization": `Bearer ${token}`
        // })
        .send(blog)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          res.body.should.have.property("message");
          done();
        });
    });
  });

  /**
   * Test the GET (one by id) route
   */

  describe("/GET /blogs", () => {
    const blogId = '5f72c4e3e5636a1aa06bf0f7'
    it("it should get a blog by id", (done) => {
      chai
        .request(server)
        .get(`/blogs/${blogId}`)
        // .set({
        //   "Authorization": `Bearer ${token}`
        // })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("_id");
          res.body.should.have.property("title");
          res.body.should.have.property("intro");
          res.body.should.have.property("content");
          done();
        });
    });
  });
 
  describe("/DELETE /blogs", () => {
    it("it should delete a blog of that id", (done) => {
      const blogId = '5f746d7b945aa3390c7e4628'
      chai
        .request(server)
        .delete(`/blogs/${blogId}`)
        // .set({
        //   "Authorization": `Bearer ${token}`
        // })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

  });

});

describe("Contact API", () => {
  /**
   * Test the GET (all the blogs) route
   */
  describe("/GET /questions", () => {
    it("it should GET all the questions", (done) => {
      chai
        .request(server)
        .get("/questions")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          //res.body.length.should.be.eql(8);
          done();
        });
    });
  });

  /*
   * Test the /POST route
   */
  describe("/POST /questions/create", () => {
    it("it should send question to the database", (done) => {
      let blog = {
        name: "faustin",
        email: "fukundimana@gmail.com",
        question: "uhjasajhajkshaksakjskZJs"
      };
      chai
        .request(server)
        .post("/questions/create")
        // .set({
        //   "Authorization": `Bearer ${token}`
        // })
        .send(blog)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          res.body.should.have.property("message");
          done();
        });
    });
  });

  describe("/DELETE /questions", () => {
    it("it should delete a blog of that id", (done) => {
      const questionId = '5f72d98f48eb571f9cac602b'
      chai
        .request(server)
        .delete(`/questions/${questionId}`)
        // .set({
        //   "Authorization": `Bearer ${token}`
        // })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

});