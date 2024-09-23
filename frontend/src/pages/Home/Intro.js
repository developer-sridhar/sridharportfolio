import React from "react";
import { useSelector } from "react-redux";

const Intro = ({ scrollToAbout }) => {
  const { portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData || {};

  const { firstName, lastName, welcomeText, description, caption } = intro || {};

  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 sm:mt-4">
      <h1 className="text-white">{welcomeText || ''}</h1>
      <h2 className="text-5xl sm:text-3xl text-secondary">
        {firstName || ''} {lastName || ''}
      </h2>
      <h4 className="text-3xl sm:text-3xl text-white font-semibold">
        {caption || ''}
      </h4>
      <p className="text-white w-2/3">
        {description || ''}
      </p>
      <button
        onClick={scrollToAbout} // When clicked, it will call the scrollToAbout function
        className="border-2 border-tertiary font-semibold text-tertiary px-10 py-3 rounded hover:text-primary hover:bg-tertiary"
      >
        Get Started
      </button>
    </div>
  );
};

export default Intro;
