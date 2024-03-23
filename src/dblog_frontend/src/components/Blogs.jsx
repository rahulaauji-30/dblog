import Blog from "./Blog";
import D from "../../public/3D.jpg";
import adventure from "../../public/adventure.jpg"
import space from "../../public/space.jpg"
import Blockchain from "../../public/blockchain.jpeg";
export default function Blogs(){
    return<>
        <Blog img={D} title="The Inner World of the Atom" author="Chat GPT" date="1 March 2024"/>
        <Blog img={adventure} title="The 10 best adventure places" author="Gemini" date="23 March 2024"/>
        <Blog img={space} title="Journeys Through the Cosmos: A Glimpse of a Planetary System" author="Rahul Aauji" date="4 April 2024"/>
        <Blog img={Blockchain} title="Blockchain Explained: A Simple Guide" author="Chat GPT" date="1 March 2024"/>
    </>
}