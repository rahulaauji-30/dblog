
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import { NavLink } from "react-router-dom";
export default function Blog(props) {
  return (
    <div className="blog">
      <img src={props.img} />
      <div  className="blog-titles">
        <NavLink to="/post">{props.title}</NavLink>
        <p>{props.date}| {props.author}</p>
      </div>
      
    </div>
  );
}
