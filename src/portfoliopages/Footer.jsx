import { whoami } from "../App";

const Footer = () => (
    <footer className="bg-dark text-white text-center py-3">
      <p className="m-0">&copy; 2025 {whoami}. @  <a href="https://www.techsport.app"
      style={{color: "white"}}
      >techsport.app</a> All rights reserved.</p>
   
    </footer>
  );

  export default Footer