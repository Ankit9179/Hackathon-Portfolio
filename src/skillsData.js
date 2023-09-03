//array of objects
import { BsFiletypeHtml, BsFiletypeCss } from "react-icons/bs";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const TechSkillsList = [
  {
    _id: 1,
    Name: "html",
    icon: BsFiletypeHtml,
  },
  {
    _id: 2,
    Name: "css",
    icon: BsFiletypeCss,
  },
  {
    _id: 3,
    Name: "javaScript",
    icon: BiLogoJavascript,
  },
  {
    _id: 4,
    Name: "React",
    icon: BiLogoReact,
  },
  {
    _id: 5,
    Name: "Node Js",
    icon: BiLogoNodejs,
  },
  {
    _id: 6,
    Name: "Express Js",
    icon: SiExpress,
  },
  {
    _id: 7,
    Name: "Mongo DB",
    icon: BiLogoMongodb,
  },
  {
    _id: 8,
    Name: "Github",
    icon: AiFillGithub,
  },
];

export default TechSkillsList;
