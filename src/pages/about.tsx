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
      profileImg: data.attributes.profileImg.data,
      article: article,
    },
  };
};

const About = ({ data, profileImg, article }: any) => {
  const parsedArticle = parse(article);

  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>About | Stay Sane, Think Straight.</title>
      </Head>
      <div className="mb-6 flex max-w-[768px] flex-col items-center bg-white px-6 sm:px-10 py-8 sm:py-12 shadow-lg sm:min-w-[680px]">
        <div className="h-80 w-80">
          <Image
            className="rounded-full"
            alt="profile image"
            src={profileImg.attributes.url}
            width={profileImg.attributes.width}
            height={profileImg.attributes.height}
            layout="intrinsic"
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
