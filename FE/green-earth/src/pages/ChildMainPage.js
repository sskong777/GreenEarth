
import "../style/ChildMain.css";




import {Earth1} from "../components/ChildMainPage/Earth1"
import {Earth2} from "../components/ChildMainPage/Earth2"
import {Earth3} from "../components/ChildMainPage/Earth3"
import {Earth4} from "../components/ChildMainPage/Earth4"
import {Earth5} from "../components/ChildMainPage/Earth5"
import {Earth6} from "../components/ChildMainPage/Earth6"
import {Earth7} from "../components/ChildMainPage/Earth7"
import {Earth8} from "../components/ChildMainPage/Earth8"


function ChildMainPage() {
  

  const level = 8
  


  if (level ===1 ){
    
  return (
    <div>
      <Earth1 />
    </div>
    
  );} 
  else if (level === 2) {
    return (
    <div>
      <Earth2 />
    </div>
  
  );}
  else if (level === 3) {
    return (
    <div>
      <Earth3 />
    </div>
      
  );}
  else if (level === 4) {
      return (
      <div>
        <Earth4 />
      </div>
      
  );}
  else if (level === 5) {
  return (
      <div>
        <Earth5 />
      </div>
      
); }
  else if (level === 6) {
  return (
      <div>
        <Earth6 />
      </div>
  );}
  else if (level === 7) {
  return (
    <div>
      <Earth7 />
    </div>
  );}
  else if (level === 8) {
      return (
    <div>
      <Earth8 />
    </div>
  );}

  }


export default ChildMainPage;
