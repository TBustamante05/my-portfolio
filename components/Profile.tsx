import { Instagram, Mail } from "lucide-react";
import ContactBtn from "./ContactBtn";
import { motion } from "framer-motion";
type Props = {
  className?: string;
};

function Profile({ className }: Props) {
  const iconStyle =
    "w-10 h-10 hover:opacity-80 hover:bg-[#FFFDF1] hover:text-[#252422] hover:rounded-2xl p-2 duration-300 transition-all cursor-pointer";
  return (
    <motion.div
      initial={{ opacity: 0, y: 1500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: "tween" }}
      className={`${className} w-full sm:w-[350px] bg-neutral-900 text-[#FFFDF1] text-center px-8 py-10 flex flex-col items-center gap-2 rounded-2xl lg:sticky lg:top-30 self-start`}
    >
      <div
        className="w-[250px] h-[250px] rounded-full bg-cover bg-[30%_50%] bg-no-repeat"
        style={{ backgroundImage: "url('/profile2.jpeg')", backgroundSize: "105%" }}
      />
      <h1 className="font-bold text-[25px] mt-5">Thiago Bustamante</h1>
      <span className="text-[#BFBAB0] mb-2">Cali, Colombia</span>
      <p className="text-[#BFBAB0]">
        Software Engineer | Web Developer | <br /> FullStack Developer
      </p>
      <div className="flex gap-4 text-white">
        <a href="https://www.instagram.com/tgdev_x/">
          <Instagram className={iconStyle} />
        </a>
        <a href="mailto:bmosquera0510@gmail.com">
          <Mail className={iconStyle} />
        </a>
      </div>
      <ContactBtn className="mt-18 w-fit" />
    </motion.div>
  );
}

export default Profile;
