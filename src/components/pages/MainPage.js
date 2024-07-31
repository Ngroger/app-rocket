import Navbar from "../ui/Navbar";
import Categories from "../ui/Categories";

function MainPage() {
    return (
        <div className="bg-[#F9FBFC] w-full h-[100vh] flex flex-col">
            <Navbar data="Goodbye World"/>
            <div className="w-full flex-1 flex-grow border-4 p-6 border-red-500">
                <Categories/>
            </div>
        </div>
    );
};

export default MainPage;
