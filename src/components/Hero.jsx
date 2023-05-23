const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <p className="font-inter text-3xl font-black">
          <span className="font-black text-4xl text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-indigo-500">
            S
          </span>
          umida
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
        Summarize Effortlessly <br className="max-md:hidden" />
        <span className="blue_gradient ">Cutting Edge</span>
      </h1>
      <h2 className="desc">
        Make your reading easier with Sumida, a freely available article
        summarizer that turns long articles into brief and straightforward
        summaries.
      </h2>
    </header>
  );
};

export default Hero;