import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { NavLink } from "react-router-dom";
export default function BlogAdmin(props) {
  return (
    <div className="blog">
      <img src={props.img} />
      <div className="blog-titles">
        <NavLink to="/post">{props.title}</NavLink>
        <div className="trash-details">
          <p>
            {props.date} | {props.author}
          </p>
          <DeleteRoundedIcon className="trash"/>
        </div>
      </div>
    </div>
  );
}
