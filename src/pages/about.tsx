import axios from "axios";
import { GetStaticProps } from "next";
import Image from "next/image";
import { editorjsConverter } from "../functions/editorjsConverter";
import { GetAbout, IAbout } from "../types/abouttypes";
import parse from "html-react-parser";

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
      <div className="mb-6 flex max-w-[768px] flex-col items-center bg-white px-10 pt-16 pb-12 shadow-lg md:min-w-[680px]">
        <div className="h-80 w-80">
          <Image
            className="rounded-full"
            src={profileImg.attributes.url}
            width={profileImg.attributes.width}
            height={profileImg.attributes.height}
            layout="intrinsic"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
        <div className="px-4 py-4">{parsedArticle}</div>
      </div>
    </div>
  );
};

export default About;
