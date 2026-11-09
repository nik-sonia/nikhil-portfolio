import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import { motion } from "framer-motion";
// import { SiTailwindcss } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiVercel } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
export function GlowingEffectDemoSecond() {
  return (
    <>
      <h3 className="  text-3xl text-center md:text-4xl font-bold font-['Playfair_Display'] tracking-wide">
        Technical Skills
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className=" max-w-xl font-serif mt-5 mx-auto text-center text-base md:text-lg text-stone-800 px-4"
        >
          Here are the technologies and tools I’ve worked with to build
          responsive, interactive, and high-quality web applications.
        </motion.p>
      </h3>
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={
            <FaHtml5 className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="HTML5"
          description="Building structured and semantic web pages."
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={
            <SiTailwindcss className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="Tailwind CSS"
          description="Utility-first styling for rapid UI development."
        />
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={
            <FaNodeJs className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="Node.js"
          description="Backend development with JavaScript runtime."
        />
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<FaJs className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="JavaScript (ES6+)"
          description="Adding interactivity and logic to websites."
        />
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={
            <FaReact className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="React.js"
          description="Creating fast, reusable, component-based UIs."
        />
      </ul>
    </>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <>
      <li className={`min-h-[14rem] list-none ${area}`}>
        <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
          <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="w-fit rounded-lg border border-gray-600 p-2">
                {icon}
              </div>
              <div className="space-y-3">
                <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                  {title}
                </h3>
                <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                  {description}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </li>

      {/* second li */}
      {/* <li className={` list-none ${area}`}>
        <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
          <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="w-fit rounded-lg border border-gray-600 p-2">
                {icon}
              </div>
              <div className="space-y-3">
                <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                  {title}
                </h3>
                <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                  {description}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </li> */}
    </>
  );
};
