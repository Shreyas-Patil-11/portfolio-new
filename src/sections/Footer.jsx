import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-[#1C1C21] flex justify-between items-center flex-wrap gap-5">
      {/* Terms & Privacy */}
      <div className="text-[#3A3A49] flex gap-2">
        <p>Terms & Condition</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      {/* Social Media Links - Visible Only on Small Screens */}
      <div className="flex gap-3 lg:hidden">
        <a
          href="https://github.com/Shreyas-Patil-11"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 rounded-sm bg-[#a3a3a3] hover:bg-[#b8b8ba] transition-all hover:-translate-y-1 hover:rotate-6"
        >
          <AiOutlineGithub fontSize={26} />
        </a>
        <a
          href="https://www.linkedin.com/in/shreyas-patil11/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 rounded-sm bg-indigo-300 hover:bg-indigo-600 transition-all hover:-translate-y-1 hover:rotate-6"
        >
          <AiOutlineLinkedin fontSize={26} />
        </a>
        <a
          href="mailto:shreyaspatil1311@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-sm bg-red-300 hover:bg-red-400 transition-all hover:-translate-y-1 hover:rotate-6 shadow-md hover:shadow-lg flex items-center justify-center"
        >
          <AiOutlineMail fontSize={26} className="text-red-800" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-[#3A3A49]">© 2025 Shreyas. All rights reserved.</p>
    </section>
  );
};

export default Footer;
