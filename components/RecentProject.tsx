import { PinContainer } from "@/components/ui/3d-pin";
import { projects } from "@/data";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProject = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple"> recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 ">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <div className="relative w-[80vw] sm:w-[570px] sm:h-[40vh] h-[30vh] aspect-video overflow-hidden mb-10">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <Image
                    src="/bg.png"
                    alt="bg"
                    width={30}
                    height={30}
                    className="object-cover h-auto w-auto"
                  />
                </div>

                <Image
                  src={img}
                  alt="cover"
                  fill
                  sizes="100vw"
                  className="z-10 absolute bottom-0 object-contain"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={`${icon}-${index}`}
                      className="border border-white/20 rounded-full bg-black lg:h-10 lg:w-10 h-8 w-8  flex items-center justify-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt={icon}
                        width={30}
                        height={30}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-purple flex lg:text-xl md:text-xs text-sm">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
