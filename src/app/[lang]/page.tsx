import Image from "next/image";
import Drawer from "./components/Drawer/Drawer";
import { getTranslations } from "next-intl/server";
import ProjectCard from "./ProjectCard";
import SkillCard from "./SkillCard";
import Footer from "./components/Footer";
import GradientTitle from "./components/GradientTitle";


export default async function HomePage() {
  const homeDict = await getTranslations("home");

  return (
    <>
      <Drawer />
      <div className="flex flex-col items-center min-h-screen p-[2rem] pt-20 bg-background">
        <div className="mb-4 relative w-64 h-64 bg-white rounded-full overflow-hidden shadow-lg hover:shadow-xl hover:scale-[101%] transition-all duration-300">
          <Image
            src="/images/moi.png"
            alt="profile picture"
            style={{ objectFit: "cover" }}
            fill={true}
            sizes="100%"
            priority
          />
        </div>
        <GradientTitle>Thomas Bensemhoun</GradientTitle>
        <div className='w-28 bg-gray-400 my-2' style={{height: "0.5px"}} />
        <p className="text-sm text-center" style={{color: 'var(--foreground-secondary)'}}>{ homeDict("pageDescription") }</p>
        
        <div className="mt-10 w-full max-w-4xl p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-[101%] transition-all duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">{ homeDict("programmingLanguages") }</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <SkillCard label="C" imageName="programming_languages/c.png" />
            <SkillCard label="C++" imageName="programming_languages/cpp.png" />
            <SkillCard label="HTML / CSS / JS" imageName="programming_languages/web.png" />
            <SkillCard label="Dart / Flutter" imageName="programming_languages/flutter.png" />
            <SkillCard label="Java" imageName="programming_languages/java.png" />
            <SkillCard label="SQL" imageName="programming_languages/sql.png" />
            <SkillCard label="NoSQL" imageName="programming_languages/nosql.png" />
            <SkillCard label="PHP" imageName="programming_languages/php.png" />
          </div>
        </div>

        <div className="mt-8 w-full max-w-4xl p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-[101%] transition-all duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">{ homeDict("frameworksAndLibraries") }</h2>
          <h3 className="text-gray-500">{ homeDict("frontend") }</h3>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <SkillCard label="React" imageName="technologies/react.png" />
            <SkillCard label="Vue.js" imageName="technologies/vuejs.png" />
            <SkillCard label="Next.js" imageName="technologies/nextjs.png" />
          </div>
          <h3 className="text-gray-500">{ homeDict("backend") }</h3>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <SkillCard label="Node.js" imageName="technologies/node.png" />
            <SkillCard label="NestJS" imageName="technologies/nestjs.png" />
            <SkillCard label="Spring Boot" imageName="technologies/springboot.png" />
          </div>
        </div>

        <div className="mt-8 w-full max-w-4xl p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-[101%] transition-all duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">{ homeDict("otherTechnologies") }</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <SkillCard label="Docker" imageName="technologies/docker.png" />
            <SkillCard label="AWS" imageName="technologies/aws.png" />
            <SkillCard label="Git" imageName="technologies/git.png" />
          </div>
        </div>

        <div className="mt-8 w-full max-w-4xl p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-[101%] transition-all duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">{homeDict("projects")}</h2>
          <h3 className="text-gray-500">{ homeDict("students") }</h3>
          <ProjectCard
            title="Cub3d"
            description={homeDict("cub3dQuote")}
            url="https://github.com/thomasben3/cub3d"
            popupImage="/images/projects/cub3d.gif"
          />
          <ProjectCard
            title="ft_transcendence"
            description={homeDict("transcendenceQuote")}
            url="https://github.com/thomasben3/ft_transcendence"
            popupImage="/images/projects/pong.png"
          />
          <h3 className="text-gray-500 pt-4">{ homeDict("professionals") }</h3>
          <ProjectCard title={homeDict("flutterMobileApp")} description={homeDict("flutterMobileAppQuote")} />
          <ProjectCard title={homeDict("CRMWebApp")} description={homeDict("CRMWebAppQuote")} />
        </div>

        <Footer />
      </div>
    </>
  );
}
