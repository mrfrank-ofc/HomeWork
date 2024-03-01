// AboutMe.tsx
import foto from '../../../assets/images/foto.webp';

const AboutMe = () => {
  return (
    <div className="bg-sectionLight dark:bg-sectionDark text-textLight dark:text-textDark px-4 md:p-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-evenly">
        {/* Image container */}
        <div className="mb-8 md:mb-0 w-full md:w-auto flex justify-center md:justify-start">
          <img src={foto} alt="Programador" className="w-60 md:w-72 h-auto rounded-lg shadow-custom" />
        </div>
        {/* Text container */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className='font-heading text-lg md:text-xl lg:text-2xl gradient-text font-bold'>About Me</h1>
          <h4 className="font-heading text-2xl md:text-3xl lg:text-4xl dark:text-headingDark mb-3">
            Full-Stack Developer based in Maceió, Alagoas 📍
          </h4>
          <p className="font-body">
            Hey, my name is João, and I'm a FulStack Developer dedicated to engineering intuitive and visually polished user experiences.
          </p>
          <p className="font-body mt-3">
            My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
