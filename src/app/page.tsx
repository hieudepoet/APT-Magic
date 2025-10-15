import Link from "next/link";
import Button from "@/components/UI/Button";
import SpotlightCard from "@/components/UI/SpotlightCard";
import FeaturesSection from "@/components/Create/FeaturesSection";
import { FaArrowRight, FaPalette } from "react-icons/fa";
import GradientReactIcon from "@/components/UI/GradientReactIcon";
import { MdOutlinePalette } from "react-icons/md";
import GlassBox from "@/components/UI/GlassBox";
import DirectedTranslate from "@/components/UI/Effect/DirectedTranslate";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-fading-gradient h-[80vh] z-0"></div>
        {/* Hoa Tiet */}
        <div className="absolute inset-0 w-[110%] flex justify-between z-0 pointer-events-none">
          <Image
            src="/ui/hoa-tiet/dots.png"
            alt="Background Pattern"
            width={200}
            height={200}
            className="opacity-10 h-[80vh] w-auto rotate-190"
          />
          <Image
            src="/ui/hoa-tiet/dots.png"
            alt="Background Pattern"
            width={500}
            height={500}
            className="opacity-10 h-[80vh] w-auto -rotate-10"
          />
        </div>
        {/* Content */}
        <div className="max-w-7xl mx-auto text-center mt-[3vh] relative z-10">
          <div className=" p-8 md:p-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white ">
              Transform Your Photos with
              <span className="block mt-2"> AI Magic</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 mt-3 max-w-3xl mx-auto">
              From restoring old memories to creating stunning anime and
              cyberpunk art, unleash the power of AI to transform your photos
              into masterpieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/create">
                <Button
                  size="lg"
                  className="w-full sm:w-auto hover:cursor-pointer bg-nones border border-white !bg-[rgba(255,255,255,0)] border-white text-white hover:!bg-[rgba(0,0,0,0.1)] transition-all duration-200"
                >
                  Start Creating
                </Button>
              </Link>
              <Link href="/community">
                <Button
                  size="lg"
                  className="group text-white border-none w-full sm:w-auto hover:cursor-pointer !bg-[rgba(255,255,255,0)] "
                >
                  Explore Gallery{" "}
                  <FaArrowRight className="inline ml-2 text-white group-hover:translate-x-2 duration-200"></FaArrowRight>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Art Part */}
        <div className="relative w-[50vw] h-[50vw] mx-auto  mt-20 z-10">
          {/* Main */}
          <GlassBox borderPadding={25} className="w-full h-full mt-5 mx-auto">
            <Image
              src="/ui/purple-glasses.jpg"
              alt="Art"
              fill
              className="object-center object-cover rounded-3xl"
            ></Image>
          </GlassBox>
          {/* Image 1 */}
          <DirectedTranslate
            xUnit={10}
            yUnit={-10}
            step={10}
            className="absolute -top-40 -right-60 -rotate-30 -z-10"
          >
            <GlassBox className="w-[300px] h-[300px]" borderPadding={20}>
              <Image
                src="/ui/color-man.jpg"
                alt="Art"
                fill
                className="object-center object-cover rounded-3xl"
              ></Image>
            </GlassBox>
          </DirectedTranslate>

          {/* Image 2 */}
          <DirectedTranslate
            xUnit={-10}
            yUnit={-10}
            step={10}
            className="absolute -top-50 -left-80 rotate-15 -z-10"
          >
            <GlassBox className=" w-[350px] h-[350px]" borderPadding={20}>
              <Image
                src="/ui/anime.jpg"
                alt="Art"
                fill
                className="object-center object-cover rounded-3xl"
              ></Image>
            </GlassBox>
          </DirectedTranslate>

          {/* Image 3 */}
          <DirectedTranslate
            xUnit={-5}
            yUnit={-10}
            step={20}
            distance={200}
            className="absolute bottom-15 -left-80 -rotate-15 -z-10"
          >
            <GlassBox className=" w-[350px] h-[350px]" borderPadding={20}>
              <Image
                src="/ui/holy-meow.jpg"
                alt="Art"
                fill
                className="object-center object-cover rounded-3xl"
              ></Image>
            </GlassBox>
          </DirectedTranslate>

          {/* Image 4 */}
          <DirectedTranslate
            xUnit={5}
            yUnit={-10}
            step={20}
            distance={200}
            className="absolute bottom-35 -right-80 rotate-20 -z-10"
          >
            <GlassBox className=" w-[350px] h-[350px]" borderPadding={20}>
              <Image
                src="/ui/old-city.jpg"
                alt="Art"
                fill
                className="object-center object-cover rounded-3xl"
              ></Image>
            </GlassBox>
          </DirectedTranslate>
        </div>
      </section>

      {/* Features Section */}
      <div className="flex flex-col items-center m-40">
        <h2 className="text-4xl md:text-6xl font-bold text-white p-4">
          <span className="text-gradient">Platform</span> Gallery{" "}
          <GradientReactIcon
            icon={MdOutlinePalette}
            size={45}
            className="inline"
          />
        </h2>
        <p className="text-xl text-center text-gray-400 mb-8 mt-3 max-w-3xl mx-auto pb-4">
          Start trying out the amazing features and harness the full power of our magical AI ability to create your own Artwork
        </p>

        <FeaturesSection />
      </div>

    </div>
  );
}
