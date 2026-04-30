import { useState, useEffect } from "react"
import vision from "./assest/our-vision-img.jpg"
import mission from "./assest/our-mission-img.jpg"
import approach from "./assest/our-approach-img.jpg"
import Image from "../../ui/Image"
import { Check } from "lucide-react"

import AOS from "aos";

const Vision = () => {
    const tabsData = [
        {
            key: "vision",
            title: "Our Vision",
            heading: "Pioneering excellence in car rental services",
            desc:
                "We aim to continually innovate and integrate the latest technology into our services. From easy online bookings to advanced vehicle tracking systems, our goal is to make the car rental process seamless and efficient for our customers. Quality is at the heart of everything we do. We maintain a diverse fleet of well-maintained vehicles that meet the highest standards of safety and comfort.",
            points: [
                "Our customers are our top priority",
                "Quality is at the heart of everything we do",
                "Every vehicle leaves care looking its absolute best",
            ],
            image: vision,
        },
        {
            key: "mission",
            title: "Our Mission",
            heading: "Delivering reliable and premium rental experience",
            desc:
                "We aim to continually innovate and integrate the latest technology into our services. From easy online bookings to advanced vehicle tracking systems, our goal is to make the car rental process seamless and efficient for our customers. Quality is at the heart of everything we do. We maintain a diverse fleet of well-maintained vehicles that meet the highest standards of safety and comfort.",
            points: [
                "Our customers are our top priority",
                "Quality is at the heart of everything we do",
                "Every vehicle leaves care looking its absolute best",
            ],
            image: mission,
        },
        {
            key: "approach",
            title: "Our Approach",
            heading: "Smart solutions with modern technology",
            desc:
                "We aim to continually innovate and integrate the latest technology into our services. From easy online bookings to advanced vehicle tracking systems, our goal is to make the car rental process seamless and efficient for our customers. Quality is at the heart of everything we do. We maintain a diverse fleet of well-maintained vehicles that meet the highest standards of safety and comfort.",
            points: [
                "Our customers are our top priority",
                "Quality is at the heart of everything we do",
                "Every vehicle leaves care looking its absolute best",
            ],
            image: approach,
        },
    ];

    const [activeTab, setActiveTab] = useState("vision");
    const currentTab = tabsData.find(tab => tab.key === activeTab);

    useEffect(() => {
        setTimeout(() => {
            AOS.refreshHard(); 
        }, 100);
    }, [activeTab]);

    return (
        <>
            <div className="section py-[8%] relative space-y-8 lg:space-y-12">
                <div className="content-col text-black w-full relative gap-8 mx-auto">
                    <div className="main-title flex flex-col text-center mx-auto gap-3">
                        <span className="sub-title" data-aos="fade-down" data-aos-delay="100">
                            Vision Mission
                        </span>

                        <h2 className="heading-1 max-w-200" data-aos="fade-down" data-aos-delay="200">
                            Driving excellence and innovation
                            in car rental services
                        </h2>
                    </div>

                    <div className="content-desc flex flex-col gap-10 min-w-full lg:min-w-3xl mx-auto">
                        <ul className="grid-col lg:grid-cols-3 gap-3 bg-gray-light p-3 rounded-sm lg:rounded-full w-full" data-aos="fade-center" data-aos-delay="300">
                            {tabsData.map((tab) => (
                                <li key={tab.key}>
                                    <button
                                        onClick={() => setActiveTab(tab.key)}
                                        className={`py-5 text-xl font-medium w-full rounded-sm lg:rounded-full transition-all duration-300 cursor-pointer
                                         ${activeTab === tab.key
                                                ? "bg-heading text-white"
                                                : "bg-white text-black"
                                            }`}
                                    >
                                        {tab.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="our-vision-mission-approach section-container space-y-8">
                    <div className="content-col text-black w-full lg:w-1/2 gap-8">

                        <div className="main-title flex flex-col gap-3">
                            <span className="sub-title" data-aos="fade-right" data-aos-delay="100">{currentTab.title}</span>

                            <h2 className="heading-1 max-w-2xl" data-aos="fade-right" data-aos-delay="200">
                                {currentTab.heading}
                            </h2>
                        </div>

                        <div className="content-desc flex flex-col gap-10">
                            <p className="text-desc text-pera max-w-140" data-aos="fade-right" data-aos-delay="300">
                                {currentTab.desc}
                            </p>

                            <ul className="space-y-5">
                                {currentTab.points.map((point, i) => (
                                    <li
                                        key={i}
                                        className="centered-row flex-wrap gap-2"
                                        data-aos="fade-right"
                                        data-aos-delay={i * 120} // 🔥 FIX
                                    >
                                        <Check
                                            size={22}
                                            className="bg-black text-white p-1 rounded-full"
                                        />
                                        <span className="text-lg font-medium">{point}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>

                    <Image
                        src={currentTab.image}
                        alt={currentTab.key}
                        wrapperClass="w-full lg:w-1/2 rounded-sm relative"
                        className="section-image"
                        data-aos="fade-left" data-aos-delay="500"
                    />
                </div>
            </div>
        </>
    )
}

export default Vision