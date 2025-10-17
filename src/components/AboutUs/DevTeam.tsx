"use client"

import ProfileCard from "@/components/UI/ProfileCard"
import Image from "next/image";

export default function DevTeam() {
    return (
        <div className="min-h-screen py-16">
            <div className="container mx-auto px-4 mt-20">
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
                <div className="relative text-center mb-12 z-50">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Meet the team</h2>
                    <p className="text-xl text-gray-400 mb-8 mt-3 max-w-3xl mx-auto">
                        Our talented team of developers, designers, and engineers is passionate about building innovative solutions. Get to know the people behind the code!
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    <ProfileCard
                        name="hieudepoet"
                        title="Viet Hieu Dinh"
                        handle="hieudepoet"
                        status="Full-stack Developer"
                        contactText="Contact Me"
                        avatarUrl="/devteam/hieudepoet.png"
                        miniAvatarUrl="/devteam/hieudepoet-mini.png"
                        iconUrl="/assets/iconpattern.png"
                        grainUrl="/assets/grain.webp"
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={true}
                        onContactClick={() => window.open('https://github.com/hieudepoet', '_blank')}
                    />
                    <ProfileCard
                        name="mndkhanh"
                        title="Mai Nguyen Duy Khanh"
                        handle="mndkhanh"
                        status="Full-stack Developer"
                        contactText="Contact Me"
                        avatarUrl="/devteam/mndkhanh.png"
                        miniAvatarUrl="/devteam/mndkhanh-mini.png"
                        iconUrl="/assets/iconpattern.png"
                        grainUrl="/assets/grain.webp"
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={true}
                        onContactClick={() => window.open('https://github.com/mndkhanh', '_blank')}
                    />
                    <ProfileCard
                        name="anonymous"
                        title="Anonymous user"
                        handle="anonymous"
                        status="unknown"
                        contactText="Contact Me"
                        avatarUrl="/devteam/anon-user.png"
                        miniAvatarUrl="/assets/anon-user.png"
                        iconUrl="/assets/iconpattern.png"
                        grainUrl="/assets/grain.webp"
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={true}
                        onContactClick={() => console.log('Contact clicked')}
                    />
                    <ProfileCard
                        name="anonymous"
                        title="Anonymous user"
                        handle="anonymous"
                        status="unknown"
                        contactText="Contact Me"
                        avatarUrl="/devteam/anon-user.png"
                        miniAvatarUrl="/assets/anon-user.png"
                        iconUrl="/assets/iconpattern.png"
                        grainUrl="/assets/grain.webp"
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={true}
                        onContactClick={() => console.log('Contact clicked')}
                    />
                    <ProfileCard
                        name="anonymous"
                        title="Anonymous user"
                        handle="anonymous"
                        status="unknown"
                        contactText="Contact Me"
                        avatarUrl="/devteam/anon-user.png"
                        miniAvatarUrl="/assets/anon-user.png"
                        iconUrl="/assets/iconpattern.png"
                        grainUrl="/assets/grain.webp"
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={true}
                        onContactClick={() => console.log('Contact clicked')}
                    />
                </div>
            </div>
        </div>
    )
}