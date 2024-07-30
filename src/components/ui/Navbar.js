import { LuUser2 } from "react-icons/lu";
import { BsCart2 } from "react-icons/bs";

function Navbar({ data }) {
    return (
        <div className="w-full bg-[#FFFFFF] p-5 mobile:px-2 tablet:px-12 rounded-bl-[64px] rounded-br-[64px] flex flex-row items-center justify-between">
            <img src={require("../../img/logo.png")} alt="logo"/>
            <div className="border-[#FFA800] border-[1px] p-2 px-4 rounded-xl w-96 mobile:hidden desktop2:block">
                <input placeholder="Поиск" className="outline-none bg-transparent text-2xl"/>
            </div>
            <div className="flex flex-row space-x-6">
                <button className="bg-[#F9FBFC] rounded-full h-12 w-12 flex items-center justify-center group hover:bg-[#FFA800] ease-out duration-300">
                    <LuUser2 className="text-3xl text-[#FFA800] group-hover:text-white ease-out duration-300"/>
                </button>
                <button className="bg-[#F9FBFC] rounded-full h-12 w-12 flex items-center justify-center group hover:bg-[#FFA800] ease-out duration-300">
                    <BsCart2 className="text-3xl text-[#FFA800] group-hover:text-white ease-out duration-300"/>
                </button>
            </div>
        </div>
    )
};

export default Navbar;