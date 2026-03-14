import { ChevronRight, Globe, Smartphone } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  number: string;
  category: string;
  title: string;
  gradient: string;
  year: string;
  side: "left" | "right";
  tech: string[];
  image?: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  link: string;
}

function ProjectCard({
  number,
  category,
  title,
  gradient,
  year,
  side,
  tech,
  image,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  link,
}: ProjectCardProps) {
  return (
    <div
      className="relative mb-16 md:mb-32"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Timeline Dot - Visible on tablet and desktop large (with timeline) */}
      <div className="hidden md:block lg:hidden 2xl:block absolute left-1/2 top-8 w-4 h-4 transform -translate-x-1/2 z-20 rounded-full">
        <div
          className={`w-4 h-4 bg-gradient-to-r ${gradient} rounded-full`}
        ></div>
        <div
          className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-full animate-ping opacity-75`}
        ></div>
      </div>

      {/* Horizontal Dotted Lines - Visible on tablet and desktop large (with timeline) */}
      {side === "left" ? (
        <div
          className="hidden md:block lg:hidden 2xl:block absolute left-0 right-1/2 top-10 h-px transform translate-x-8"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to left, #BFBAB0 0, #FFFDF1 5px, transparent 5px, transparent 10px)",
          }}
        ></div>
      ) : (
        <div
          className="hidden md:block lg:hidden 2xl:block absolute left-1/2 right-0 top-10 h-px transform -translate-x-8"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to left, #BFBAB0 0, #FFFDF1 5px, transparent 5px, transparent 10px)",
          }}
        ></div>
      )}

      {/* Mobile Layout - Single Column (< 768px) */}
      <div className="md:hidden">
        <div className="text-sm mb-2 flex items-center gap-2 text-[#ABA49C]">
          <span>{number}</span>
          <span className="w-8 h-px bg-gray-700"></span>
          <span>{category}</span>
        </div>

        <h2 className="text-3xl font-bold mb-4 text-[#FFFDF1]">{title}</h2>

        <div
          className={`rounded-2xl shadow-2xl overflow-hidden mb-4 transform transition-all duration-500 ${isHovered ? "scale-105" : ""}`}
        >
          <div
            className={`${side === "left" ? "bg-[#EB5E28]" : "bg-neutral-900"} rounded-2xl p-6 min-h-[300px] relative overflow-hidden`}
          >
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-end justify-center absolute p-4 left-0 right-0 bottom-0 text-center">
              {image ? (
                <a href={`/project/${link}`} target="_blank">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full z-20 object-cover hover:scale-105 transition-transform duration-500 p-2 border border-dashed border-black rounded-lg"
                  />
                </a>
              ) : (
                <>
                  {category === "MOBILE APP" ? (
                    <Smartphone className="w-24 h-24 mx-auto text-[#FFFDF1]" />
                  ) : (
                    <Globe className="w-24 h-24 mx-auto text-[#FFFDF1]" />
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[#EB5E28] font-semibold cursor-pointer group mb-4">
          <Link href={`/project/${link}`}>View Project</Link>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </div>

        <div className="text-sm text-[#ABA49C] mb-4">Q4 {year}</div>

        <div className="flex flex-wrap gap-2">
          {tech.map((techItem, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-neutral-900 border border-transparent text-xs text-[#FFFDF1] hover:border-[#EB5E28] hover:text-[#EB5E28] transition-colors cursor-default duration-300 ease-in-out rounded-full"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>

      {/* Medium Single Column Layout (1024px - 1530px) */}
      <div className="hidden lg:block 2xl:hidden">
        <div className="text-sm mb-2 flex items-center gap-2 text-[#ABA49C]">
          <span>{number}</span>
          <span className="w-8 h-px bg-gray-700"></span>
          <span>{category}</span>
        </div>

        <h2 className="text-4xl font-bold mb-4 text-[#FFFDF1]">{title}</h2>

        <div
          className={`rounded-2xl shadow-2xl overflow-hidden mb-4 transform transition-all duration-500 ${isHovered ? "scale-105" : ""}`}
        >
          <div
            className={`${side === "left" ? "bg-[#EB5E28]" : "bg-neutral-900"} rounded-2xl p-6 min-h-[400px] relative overflow-hidden`}
          >
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-end justify-center absolute p-4 left-0 right-0 bottom-0 text-center">
              {image ? (
                <a href={`/project/${link}`} target="_blank">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full z-20 object-cover hover:scale-105 transition-transform duration-500 p-2 border border-dashed border-black rounded-lg"
                  />
                </a>
              ) : (
                <>
                  {category === "MOBILE APP" ? (
                    <Smartphone className="w-24 h-24 mx-auto text-[#FFFDF1]" />
                  ) : (
                    <Globe className="w-24 h-24 mx-auto text-[#FFFDF1]" />
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[#EB5E28] font-semibold cursor-pointer group mb-4">
          <Link href={`/project/${link}`}>View Project</Link>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </div>

        <div className="text-sm text-[#ABA49C] mb-4">Q4 {year}</div>

        <div className="flex flex-wrap gap-2">
          {tech.map((techItem, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-neutral-900 border border-transparent text-xs text-[#FFFDF1] hover:border-[#EB5E28] hover:text-[#EB5E28] transition-colors cursor-default duration-300 ease-in-out rounded-full"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>

      {/* Two-Column Timeline Layout (768px - 1024px AND > 1530px) */}
      {side === "left" ? (
        <div className="hidden md:grid lg:hidden 2xl:grid grid-cols-2 gap-16 items-center">
          <div
            className={`text-right pr-8 transform transition-all duration-500 ${isHovered ? "-translate-x-4" : ""}`}
          >
            <div className="text-sm mb-2 flex items-center justify-end gap-2 text-[#ABA49C]">
              <span>{category}</span>
              <span className="w-8 h-px bg-gray-700"></span>
              <span>{number}</span>
            </div>
            <h2 className="text-5xl font-bold mb-4 text-[#FFFDF1]">{title}</h2>
            <div className="flex items-center gap-2 font-semibold cursor-pointer group justify-end text-[#EB5E28]">
              <Link href={`/project/${link}`}>View Project</Link>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
            <div className="mt-8 text-sm text-[#ABA49C]">Q4 {year}</div>
            <div className="mt-6 flex flex-wrap gap-2 justify-end">
              {tech.map((techItem, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-neutral-900 border border-transparent text-xs text-[#FFFDF1] hover:border-[#EB5E28] hover:text-[#EB5E28] transition-colors cursor-default duration-300 ease-in-out rounded-full"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>
          <div
            className={`pl-8 transform transition-all duration-500 ${isHovered ? "scale-105 -translate-y-2" : ""}`}
          >
            <div className="relative rounded-2xl shadow-2xl overflow-hidden mt-12">
              <div className="bg-[#EB5E28] rounded-2xl min-h-[400px] relative overflow-hidden">
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-end justify-center absolute p-4 left-0 right-0 bottom-0 text-center cursor-pointer">
                  {image ? (
                    <a href={`/project/${link}`} target="_blank">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full z-20 object-cover hover:-rotate-6 hover:scale-105 transition-transform duration-500 p-2 border border-dashed border-black rounded-lg"
                      />
                    </a>
                  ) : (
                    <>
                      {category === "MOBILE APP" ? (
                        <Smartphone className="w-24 h-24 mx-auto text-[#FFFDF1]" />
                      ) : (
                        <Globe className="w-24 h-24 mx-auto text-[#FFFDF1]" />
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden md:grid lg:hidden 2xl:grid grid-cols-2 gap-16 items-center w-fit">
          <div
            className={`pr-8 transform transition-all duration-500 ${isHovered ? "scale-105 -translate-y-2" : ""}`}
          >
            <div className="rounded-2xl shadow-2xl overflow-hidden mt-12">
              <div className="bg-neutral-900 rounded-2xl p-6 min-h-[400px] relative overflow-hidden">
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-end justify-center absolute p-4 left-0 right-0 bottom-0 text-center cursor-pointer">
                  {image ? (
                    <a href={`/project/${link}`} target="_blank">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full z-20 object-cover hover:rotate-6 hover:scale-105 transition-transform duration-500 p-2 border border-dashed border-[#EB5E28] rounded-2xl"
                      />
                    </a>
                  ) : (
                    <>
                      {category === "MOBILE APP" ? (
                        <Smartphone className="w-24 h-24 mx-auto text-[#FFFDF1]" />
                      ) : (
                        <Globe className="w-24 h-24 mx-auto text-[#FFFDF1]" />
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`pl-8 transform transition-all duration-500 ${isHovered ? "translate-x-4" : ""}`}
          >
            <div className="text-sm mb-2 flex items-center gap-2 text-[#ABA49C]">
              <span>{number}</span>
              <span className="w-8 h-px bg-gray-700"></span>
              <span>{category}</span>
            </div>
            <h2 className="text-5xl font-bold mb-4 leading-tight text-[#FFFDF1]">
              {title}
            </h2>
            <div className="flex items-center gap-2 text-[#EB5E28] font-semibold cursor-pointer group">
              <Link href={`/project/${link}`}>View Project</Link>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
            <div className="mt-8 text-sm text-[#ABA49C]">Q4 {year}</div>
            <div className="mt-6 flex flex-wrap gap-2">
              {tech.map((techItem, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-neutral-900 border border-transparent text-xs text-[#FFFDF1] hover:border-[#EB5E28] hover:text-[#EB5E28] transition-colors cursor-default duration-300 ease-in-out rounded-full"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
