import { Flowbite, Navbar } from "flowbite-react";
import type { NextPage } from "next";
import BlogPost from "../components/BlogPost";
import StaysaneLogo from "../components/StaysaneLogo";

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
          <div className="grid grid-cols-6 gap-8 mt-2">
            <div className="col-span-4 flex flex-col gap-6">
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
