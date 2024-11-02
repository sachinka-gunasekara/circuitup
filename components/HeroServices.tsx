import Image from 'next/image';

export default function ProjectCards() {
  const projects = [
    {
      title: 'PCB Design',
      imgSrc: '/assets/pcb.jpg',
      link: 'services/pcb',
    },
    {
      title: 'Firmware Development',
      imgSrc: '/assets/firmware.jpg',
      link: '/services/firmware',
    },
    {
      title: 'Web Development',
      imgSrc: '/assets/webdev.jpg',
      link: 'services/webdev',
    },
    {
      title: 'Desktop Application',
      imgSrc: '/assets/desktopapp.jpg',
      link: 'services/desktopapp',
    },
    {
      title: 'Manufacturing',
      imgSrc: '/assets/manufac.jpg',
      link: 'services/manufacturing',
    },
  ];

  return (
    <div className="container px-4 py-20">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="relative flex flex-col w-full max-w-[300px] h-72 hover:scale-95 hover:shadow-xl transition duration-300"
          >
            <div
              className="relative h-full w-full flex flex-col items-center rounded-lg border-2 border-slate-700 hover:border-[#33b4f4] text-slate-950 overflow-hidden"
              data-aos="fade-up"
            >
              {/* Background Image using Next.js Image */}
              <div className="absolute inset-0">
                <Image
                  src={project.imgSrc}
                  alt={`${project.title} background`}
                  layout="fill"
                  objectFit="cover"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                />
              </div>

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Overlay Text */}
              <div className="relative p-6 flex flex-col justify-center items-center text-center h-full">
                <h5 className="text-3xl font-light mb-2 text-white">
                  {project.title}
                </h5>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
