import axios from "axios";
import { GetStaticProps } from "next";
import Image from "next/image";
import { editorjsConverter } from "../functions/editorjsConverter";
import { GetAbout, IAbout } from "../types/abouttypes";
import parse from "html-react-parser";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(
    `https://strapi.staysane.me/api/about-me?populate=profileImg`
  );
  const { data }: GetAbout = await res.data;
  const article = await editorjsConverter(data.attributes.Body);

  return await {
    props: {
      data: data,
      article: article,
    },
  };
};

const About = ({ data, article }: GetAbout) => {
  const parsedArticle = parse(article);

  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>About | Stay Sane, Think Straight.</title>
      </Head>
      <div className="mb-6 flex max-w-[768px] flex-col items-center bg-white px-6 py-8 shadow-lg sm:min-w-[680px] sm:px-10 sm:py-12">
        <div className="h-80 w-80">
          <Image
            className="rounded-full"
            alt={data.attributes.profileImg.data.attributes.alternativeText}
            src={data.attributes.profileImg.data.attributes.formats.medium.url}
            width={
              data.attributes.profileImg.data.attributes.formats.medium.width
            }
            height={
              data.attributes.profileImg.data.attributes.formats.medium.height
            }
            objectFit="cover"
            objectPosition="top"
          />
        </div>
        <div className="keep-all sm:px-4 sm:py-4">{parsedArticle}</div>
      </div>
    </div>
  );
};

export default About;
