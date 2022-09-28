import Head from "next/head";

const About = ({}: any) => {
  return (
    <div>
      <Head>
        <title>About | Stay Sane, Think Straight.</title>
      </Head>
      <div className="mb-6 h-[82vh] bg-white px-6 py-8 shadow-lg sm:min-w-[680px] sm:px-10">
        <iframe
          src="https://v1.embednotion.com/embed/2a16f89746544d17a08649a066a98a9f"
          style={{ width: "100%", height: "75vh", padding: "none" }}
        ></iframe>
      </div>
    </div>
  );
};

export default About;
