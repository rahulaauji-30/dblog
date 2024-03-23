import Text "mo:base/Text";
import List "mo:base/List";
import Debug "mo:base/Debug";
actor dblogs{
  public type Post = {
    Title:Text;
    Image:Text;
    Author:List.List<Text>;
    Content:Text;
    Date:Text;
  };

  var blogs:List.List<Post> = List.nil<Post> ();

  public func createBlog(title:Text,image:Text,author:List.List<Text>,content:Text,date:Text){
    let newBlog = {
      Title = title;
      Image = image;
      Author = author;
      Content = content;
      Date = date;
    };
    blogs := List.push(newBlog,blogs);
    Debug.print(debug_show(blogs))
  };
  
  public func deleteBlog(){

  }
}