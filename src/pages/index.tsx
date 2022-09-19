import { Flowbite, Navbar } from "flowbite-react";
import type { NextPage } from "next";
import BlogPost from "../components/BlogPost";
import PlaylistWidget from "../components/PlaylistWidget";
import StaysaneLogo from "../resources/Img/StaysaneLogo";

const Home: NextPage = () => {
  return (
    <Flowbite
      theme={{
        theme: {
          navbar: {
            base: 'bg-themeGray',
            collapse: {
              list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-lg font-medium'
            }
          }
        }
      }}>
      <div className="bg-themeGray">
        <div className="mx-16 my-2 lg:mx-36">
          <Navbar>
            <Navbar.Brand>
              <StaysaneLogo />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Navbar.Link href="#">
                About
              </Navbar.Link>
              <Navbar.Link href="#">
                Blog
              </Navbar.Link>
              <Navbar.Link href="#">
                Contact
              </Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
          <div className="flex flex-row gap-8 mt-2">
            <div className="basis-4/6 flex flex-col gap-6">
              <BlogPost />
            </div>
            <div className="hidden lg:flex">
              <PlaylistWidget />
            </div>
            <div>
              
            </div>
          </div>
        </div>

      </div>
    </Flowbite>
  );
};

export default Home;
