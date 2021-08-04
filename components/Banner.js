import Image from "next/image";
function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px]
        xl:h-[500px] 2xl:h-[600px]">
        <Image src="https://raw.githubusercontent.com/Vishnu-es/images/main/airbnbimg.webp"
            layout="fill" objectFit="cover"
        />
        <div className="absolute top-1/3 pl-10 text-xl font-bold">
            <p className="text-white w-20">Olympian & <br></br> Paralympian<br></br>
             Online <br></br> Experiences</p>
        </div>
        </div>
    )
}

export default Banner
