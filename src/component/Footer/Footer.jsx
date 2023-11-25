import {
      FaFacebook,
      FaGithub,
      FaInstagram,
      FaLinkedin,
      FaYoutube
    } from "react-icons/fa";
    
    const Footer = () => {
      return (
       <div>
        <div className="mt-12 py-5 md:py-16 bg-blue-950">
              <h1 className="text-center text-3xl md:text-5xl font-bold">Md Kamrul Islam</h1>
            
              <div className="flex justify-center items-center text-3xl md:text-5xl font-bold text-blue-600 gap-4 md:gap-12 mx-12 md:mx-96 my-8">
                  <a
                    className="cursor-pointer hover:scale-[1.2] transition"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/kamrul-1985">
                    
                    <FaGithub />
                  </a>
                  <a
                    className="cursor-pointer hover:scale-[1.2] transition"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/">
                    <FaYoutube />
                  </a>
                  <a
                    className="cursor-pointer  hover:scale-[1.2] transition"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://web.facebook.com/profile.php?id=100000570501437&mibextid=ZbWKwL">
                    <FaFacebook />
                  </a>
                  <a
                    className="cursor-pointer  hover:scale-[1.2] transition"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="£">
                    <FaInstagram />
                  </a>
                  <a
                    className="cursor-pointer  hover:scale-[1.2] transition"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="www.linkedin.com/in/kamrul-islam-3983641ba">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            
            <div>
              <p className="text-center px-5 md:px-12">Copyright © 2023 - All right reserved by Md Kamrul Islam</p>
            </div>
       </div>
      );
    };
    
    export default Footer;
    