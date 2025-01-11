const express = require("express");
const { copyFileSync } = require("fs");
const { userInfo } = require("os");
const app = express();
const path = require("path");
const {v4: uuidv4} = require("uuid");
const methodOveride = require("method-override");

app.use(express.urlencoded({extended: true}));
app.use(methodOveride ("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "I love coding"
    },

    {
        id: uuidv4(),
        username: "Hemant",
        content: "Hard worker gay!"
    },

    {
        id: uuidv4(),
        username: "Rahul", 
        content: "I got selected!"
    }

];

app.get("/posts", (req, res) => {
    res.render("index", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({username, content, id});
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((q) => id === q.id);
    res.render("show", {post});
});

app.patch("/posts/:id", (req, res)=> {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
    // res.send("path reqest working");
});

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit", {post});
});

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})

app.listen(3000, ()=> {
    console.log("Port is listening on 3000");
} );