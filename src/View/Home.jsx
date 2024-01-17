import { useEffect } from "react";
function Home() {
  useEffect(() => {
    document.title = "React with Tailwind from the very basic step by step.";
  }, []);
  return (
    <>
      <div className="sm:container mx-auto px-4">
        <div className="w-full max-w-lg mx-auto mt-8 shadow-2xl bg-gradient-to-b from-sky-100 to-sky-300 p-8 rounded-md">
          <h1 className="text-slate-800 font-title text-3xl font-semibold p-2 text-center uppercase">
            React with <span className="text-blue-600">Tailwind</span> from the
            very basic step by step.
          </h1>
          <p className="text-stone-700 text-center">
            Example here are demonstrates some of the core features of React
            from the very basic.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
