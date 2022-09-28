import Head from "next/head";

const About = ({}: any) => {
  return (
    <div>
      <Head>
        <title>About | Stay Sane, Think Straight.</title>
      </Head>
      <div className="h-[83vh] shadow-md">
        <iframe
          src="https://v1.embednotion.com/embed/2a16f89746544d17a08649a066a98a9f"
          style={{ width: "100%", height: "85vh" , padding: "none", display: "block" }}
        ></iframe>
      </div>
    </div>
  );
};

export default About;
