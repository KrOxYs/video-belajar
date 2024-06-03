import MiniG1 from "/public/mini-g1.png";
import RatingStars from "./RatingStar";
import Image from "next/image";
export default function MobileCard({ data }) {
  const { id, title, MiniImage, username, userTitle, price } = data;
  return (
    <div className=" md:hidden  flex flex-row flex-wrap justify-center items-center m-auto gap-4 ">
      <div className="w-96 flex flex-col justify-center h-auto bg-white">
        <div className="relative flex flex-row  space-y-2 md:space-y-0 rounded-xl  h-55">
          <div className="w-full flex flex-col ml-10 mt-5">
            {/* <img
                src={"../../public/g1.png"}
                alt="tailwind logo"
                className="rounded-xl w-28 mb-3"
              /> */}
            <Image src={MiniImage} width={112} alt="" />
          </div>
          <div className="w-full flex flex-col p-3 -ml-20">
            <h3 className="font-black text-gray-800 text-md">{title}</h3>
            <div className="flex items-center gap-2">
              <img
                className="w-9 h-9 rounded-md "
                src="https://www.youngontop.com/wp-content/uploads/2022/09/portrait-pretty-korean-girl-receive-surprising-news-looking-amazed-happy-camera-standing-blue-background_1258-76005.jpg"
                alt=""
              />
              <div className="font-medium text-black text-sm mt-4">
                <div>{username}</div>
                <div className=" font-sm text-gray-500 dark:text-gray-400">
                  {userTitle}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mb-5 flex flex-row gap-5 mx-auto pb-2 ">
          <div className="mr-6">
            <RatingStars />
          </div>
          <h1 className="text-xl font-bold text-green-500 mr-6 -mt-1">
            Rp {price}k
          </h1>
        </div>
      </div>
    </div>
  );
}
