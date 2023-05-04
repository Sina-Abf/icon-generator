import Image from "next/image";
import banner2 from "../../public/images/banner2.png";
import arrow from "../../public/images/arrow.png";
import Button from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex justify-center flex-col md:flex-row gap-14 mb-24">
      <div>
        <Image src={banner2} alt="icon-generation" />
      </div>
      <div className="col-start-2">
        <h1 className="text-4xl font-bold">با یه کلیک آیکون خودت رو بساز!</h1>
        <p className="my-8 max-w-md">
          با <strong className=""> آیکی دانلود </strong> کلی از زمانت رو ذخیره
          کن و ساخت آیکون رو با هر موضوعی بسپار دست هوش مصنوعی
        </p>
        <div>
          <Button className="bg-primary">
            <Link href="/generate">بزن بریم!</Link>
          </Button>
          <div className="w-full relative">
            <Image
              className="absolute right-28 -top-4 opacity-80"
              src={arrow}
              alt="arrow-icon"
              width={100}
              height={100}
            />
            <span className="absolute right-44 top-6 opacity-80">
              به همین راحتی!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
