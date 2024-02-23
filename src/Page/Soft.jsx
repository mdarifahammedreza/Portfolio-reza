import Header from "../Component/Header/Header";

const Soft = () => {
  return (
    <div>
      <Header />
      <section className=" m-10 md:m-20">
        <div className="flex before:">
          <div className="w-20 md:w-52 bg- transparent shadow-sm shadow-teal-200 rounded-l-3xl flex items-center justify-center">
            <img
              className=""
              src="https://i.ibb.co/vqd5sJ6/White-and-Blue-Modern-Aesthetic-Art-Poster.png"
              alt="competitive programming logo"
            />
          </div>

          <div className="hover:bg-slate-950 bg-transparent shadow-sm shadow-teal-200 p-4">
            <h3 className="card-title">Competitive program</h3>
          <p className="text-sm">
            Emphasize your ability to solve complex problems and troubleshoot
            issues in your projects.
          </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Soft;
