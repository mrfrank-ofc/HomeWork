
import React from 'react';
import memomojiImage from '../../../assets/images/Memoji.png'

interface HomeProps {
    name: string;
    bio: string;
    
}

const Home: React.FC <HomeProps> = ({name,bio,}) => {
  return (
    <section className="flex flex-col md:flex-row-reverse items-center md:items-center text-center md:text-left py-24 md:justify-center ">
        <div className="inline-block ">
        <img src={memomojiImage} alt={name} className="h-32 w-32 rounded-full md:mr-8 bg-" />
      </div>
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-col md:pl-8">

    <h1 className="text-2xl font-bold font-heading">Hi 👋</h1>
    <h2 className="text-xl  font-bold font-heading">My name is
    <span className='gradient-text'> Darrell Mucheri !</span>  </h2>
    <p className='text-xl  font-bold font-heading'>{bio}</p>
    </div>

    
  </section>
  );
};

export default Home;
