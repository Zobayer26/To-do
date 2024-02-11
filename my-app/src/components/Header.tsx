
import Image from "next/image";
const Header = () => {
    return (
        <div className="flex gap-2  w-[200px] mx-auto items-center">
            <div className=" font-semibold text-xl text-[#002765]">
                To-Do List
            </div>
            <div>
                <Image src="/icon.png" alt="To Do Icon" width={40} height={40} />
            </div>
        </div>
    );
};

export default Header;