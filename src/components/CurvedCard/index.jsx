import Image from 'next/image';
 
const CurvedCard = ({
    firstName = "Kevin",
    lastName = "Wilson",
    role = "Founder— Director",
    imageSrc = "/about/kevin.png"
}) => {
    return (
        <div className="relative w-[320px] h-[450px] rounded-[35px] overflow-hidden
                        group transition-all duration-300 ">
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src={imageSrc}
                    alt={`${firstName} ${lastName}`}
                    fill
                    className="object-cover transition-transform duration-500"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 z-10 flex flex-col justify-center pl-8 pr-10 py-7 bg-white rounded-tl-[35px] min-w-[200px]">
                <div
                    className="absolute bottom-0 -left-[35px] h-[35px] w-[35px] z-10"
                    style={{ background: 'radial-gradient(circle at 0 0, transparent 35px, #ffffff 35.5px)' }}
                />
                <div
                    className="absolute -top-[35px] right-0 h-[35px] w-[35px] z-10"
                    style={{ background: 'radial-gradient(circle at 0 0, transparent 35px, #ffffff 35.5px)' }}
                />
 
                <p className="text-xl font-bold text-gray-900 leading-tight">
                    {firstName} {lastName}
                </p>
                <p className="text-sm font-medium text-gray-500 mt-1 tracking-wide">
                    {role}
                </p>
            </div>
        </div>
    );
};
 
export default CurvedCard;
 
 