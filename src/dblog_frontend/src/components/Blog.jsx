
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
export default function Blog(props) {
  return (
    <div className="blog">
      <img src={props.img} />
      <div className="blog-titles">
        <span>{props.title}</span>
        <p>{props.date}| {props.author}</p>
      </div>
    </div>
  );
}
