// Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-sectionLight dark:bg-sectionDark p-8 lg:p-16 rounded-lg">
      <div className="container mx-auto">
        <div className="text-center md:text-left ">
          <h2 className="font-heading gradient-text font-bold text-2xl mb-2">contact</h2>
          <h2 className="text-headingLight dark:text-headingDark font-heading text-2xl lg:text-3xl mb-4">
            Don't be shy! Hit me up! 👇
          </h2>
          <div className="text-textLight dark:text-textDark font-body text-lg">
            <p className="mb-4">Feel free to get in touch with me. <br /> I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
            <div className="flex flex-col items-center  md:flex-row md:items-start md:justify-start gap-10">
              
              <div className="flex flex-col items-center md:items-start gap-2 ">
                <span className="gradient-text font-body text-lg">Location</span>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-map-search">
                    <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                    <path d="M9 4v13"></path>
                    <path d="M15 7v5"></path>
                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M20.2 20.2l1.8 1.8"></path>
                  </svg>
                  <span className="">Zimbabwe, Harare, Chitungwiza</span>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start gap-2">
                <span className="gradient-text font-body text-lg">Mail</span>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-mail">
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                  </svg>
                  <a href="mailto:darrelmucheri@gmail.com" className="underline ">darrelmucheri@gmail.com</a>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start gap-2">
                <span className="gradient-text font-body text-lg">My WhatsApp</span>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-mail">
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                  </svg>
                  <a href="wa.me/263719647303/?text=Hi+Darrell+I+Was+Reading+Your+Portfolii+And+...." className="underline ">WhatsApp Contact </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
