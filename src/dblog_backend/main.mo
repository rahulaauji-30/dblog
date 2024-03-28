import Text "mo:base/Text";
import List "mo:base/List";
import Debug "mo:base/Debug";
import Array "mo:base/Array";
actor dblogs {
  public type Post = {
    Title : Text;
    Image : Text;
    Author : Text;
    Content : Text;
    Date : Text;
  };

  var blogs : List.List<Post> = List.nil<Post>();

  public func createBlog(title : Text, image : Text, author : Text, content : Text, date : Text) {
    let newBlog = {
      Title = title;
      Image = image;
      Author = author;
      Content = content;
      Date = date;
    };
    blogs := List.push(newBlog, blogs);
    Debug.print(debug_show (blogs));
  };

  public query func getData() : async [Post]{
    return List.toArray(blogs);
  };

public func deleteBlog() {
  let array = List.toArray(blogs);
    Debug.print(debug_show(array))
};
}
