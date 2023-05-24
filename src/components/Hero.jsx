const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <p className="font-inter text-3xl font-black">
          <span className="font-black text-4xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500">
            S
          </span>
          umaTube
        </p>

        <button
          type="button"
          onClick={() => window.open("https://hiplip.netlify.app/", "_blank")}
          className="black_btn"
        >
          Portfolio
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Youtube Videos <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI Technology</span>
      </h1>
      <h2 className="desc">
        Make watching faster with SumaTube, a 
        freely available youtube videos summarizer that turns arduos 
        videos into brief and straightforward summaries in an instant.
      </h2>
    </header>
  );
};

export default Hero;