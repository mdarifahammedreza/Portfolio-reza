import Cart from "./Cart";

const Catrs = () => {
  const data = [
    {
      Cardtitle: "Assignment Cover page Genaretor",
      CardDescription: `The Assignment Cover Page Generator is a user-friendly project
        designed for efficient creation of professional cover pages.
        This tool simplifies the process by allowing users to input key
        information such as assignment title, author name, course
        details, and date. With an intuitive interface, users can choose
        from various templates and themes to match their academic style
        preferences.`,
      url: "/project/assignment-cover-page-genareotr",
    },
    {
      Cardtitle: "Joypurhat District Student Association,diu",
      CardDescription: `Empowering Joypurhat District students! Register, connect, and explore the vibrant community of past and present students. Join the Joypurhat District Student Association to foster connections and showcase alumni achievements. Enriching student experiences, building networks that last`,
      url: "/project/Joypurhat-District-student-Association",
    },
    {
      Cardtitle: "Assignment Cover page Genaretor",
      CardDescription: `The Assignment Cover Page Generator is a user-friendly project
        designed for efficient creation of professional cover pages.
        This tool simplifies the process by allowing users to input key
        information such as assignment title, author name, course
        details, and date. With an intuitive interface, users can choose
        from various templates and themes to match their academic style
        preferences.`,
      url: "/project/assignment-cover-page-genareotr",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => (
        <Cart key={index} item={item}></Cart>
      ))}
    </div>
  );
};

export default Catrs;
