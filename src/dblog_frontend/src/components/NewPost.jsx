import { useState } from "react";
import { dblog_backend } from "../../../declarations/dblog_backend";
export default function NewPost() {
  async function handleData(event) {
    event.preventDefault();
    let d = new Date()
    let day = d.getDate()
    let month = d.toLocaleString('en-US', { month: 'long' });
    let year = d.getFullYear()
    let date = day+" "+month+" "+year
    let author = event.target.author.value.split(",")

    let title = event.target.title.value
    let image = event.target.image.value
    let content = event.target.content.value
    await dblog_backend.createBlog(title,image,author,content,date)
  }

  return (
    <>
      <form onSubmit={handleData}>
       
          <input type="text" id="title" name="title" placeholder="Title of the blog" />
       
       
          <input type="text" placeholder="Enter Author name(Seprate with comma if there are more than one author)" name="author" />
       
      
          <input type="text" placeholder="Enter Url" name="image" />
        
        <textarea name="content" placeholder="Start blog here..."></textarea>
        <input type="submit" value="Publish" />
      </form>
    </>
  );
}
