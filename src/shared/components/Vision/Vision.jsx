import { useState, useEffect } from "react"
import vision from "./assest/our-vision-img.jpg"
import mission from "./assest/our-mission-img.jpg"
import approach from "./assest/our-approach-img.jpg"
import Image from "../../ui/Image"
import { Check } from "lucide-react"
import AOS from "aos";
import Button from "../Button"

const Vision = () => {
    const tabsData = [
        {
            key: "vision",
            title: "Our Vision",
            heading: "Pioneering excellence in car rental services",
            desc:
                "Our vision is to redefine the car rental experience by setting new standards in customer service and technological integration. We strive to be the global leader in sustainable and accessible transportation, ensuring every journey is as memorable as the destination itself.",
            points: [
                "Customer-centric innovation and digital ease",
                "Sustainable fleet expansion for a greener future",
                "Global accessibility with local expertise",
            ],
            image: vision,
        },
        {
            key: "mission",
            title: "Our Mission",
            heading: "Delivering reliable and premium rental experiences",
            desc:
                "Our mission is to provide safe, reliable, and premium car rental solutions that empower our customers to explore the world with confidence. We are committed to maintaining a diverse, top-tier fleet and delivering unparalleled service at every touchpoint of the rental process.",
            points: [
                "24/7 Premium support and roadside assistance",
                "Rigorous multi-point safety inspections",
                "Transparent pricing with no hidden surprises",
            ],
            image: mission,
        },
        {
            key: "approach",
            title: "Our Approach",
            heading: "Smart solutions with modern technology",
            desc:
                "We leverage cutting-edge technology and data-driven insights to streamline the rental process. From AI-powered fleet management to personalized booking experiences, our approach focuses on efficiency, speed, and absolute convenience for the modern traveler.",
            points: [
                "AI-driven maintenance for peak performance",
                "Contactless booking and digital key access",
                "Dynamic routing and real-time fleet tracking",
            ],
            image: approach,
        },
    ];

    const [activeTab, setActiveTab] = useState("vision");
    const currentTab = tabsData.find(tab => tab.key === activeTab);

    // Refresh AOS when the tab changes to trigger animations on the new content
    useEffect(() => {
        const timer = setTimeout(() => {
            AOS.refreshHard();
        }, 50);
        return () => clearTimeout(timer);
    }, [activeTab]);

    return (
        <section className="vision-section section py-[8%] relative overflow-hidden">
            <div className="container mx-auto px-4 space-y-12 lg:space-y-16">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <span className="sub-title text-primary inline-block" data-aos="fade-down">
                        Vision & Core Values
                    </span>
                    <h2 className="heading-1 leading-tight" data-aos="fade-down" data-aos-delay="100">
                        Driving excellence and innovation in car rental services
                    </h2>
                </div>

                {/* Tab Navigation */}
                <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                    <div className="bg-gray-100 p-2 rounded-full shadow-inner flex flex-wrap lg:flex-nowrap gap-2">
                        {tabsData.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`flex-1 py-4 px-6 text-lg font-bold uppercase tracking-wider rounded-full transition-all duration-500 transform cursor-pointer
                                    ${activeTab === tab.key
                                        ? "bg-black text-white shadow-lg scale-100"
                                        : "bg-transparent text-gray-500 hover:text-black hover:bg-white/50"
                                    }`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div className="space-y-8 order-2 lg:order-1" key={`${activeTab}-content`}>
                        <div className="space-y-4">
                            <span className="sub-title text-primary block" data-aos="fade-right">
                                {currentTab.title}
                            </span>
                            <h3 className="heading-2 text-3xl lg:text-5xl" data-aos="fade-right" data-aos-delay="100">
                                {currentTab.heading}
                            </h3>
                        </div>

                        <p className="text-desc text-pera leading-relaxed" data-aos="fade-right" data-aos-delay="200">
                            {currentTab.desc}
                        </p>

                        <ul className="space-y-4">
                            {currentTab.points.map((point, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-4 group"
                                    data-aos="fade-right"
                                    data-aos-delay={300 + (i * 100)}
                                >
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black transition-transform duration-300 group-hover:rotate-12">
                                        <Check size={18} strokeWidth={3} />
                                    </div>
                                    <span className="text-lg font-semibold text-heading">{point}</span>
                                </li>
                            ))}
                        </ul>

                        <div data-aos="fade-up" data-aos-delay="600">
                            <Button
                                text="Learn More"
                                className="btn-black mt-4! w-fit!"
                            />
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="order-1 lg:order-2" data-aos="fade-left" data-aos-delay="400">
                        <div className="relative group">
                            {/* Decorative element */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/40 transition-colors duration-500"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-black/5 rounded-full blur-2xl group-hover:bg-black/10 transition-colors duration-500"></div>

                            <Image
                                src={currentTab.image}
                                alt={currentTab.key}
                                wrapperClass="rounded-2xl shadow-2xl relative z-10 aspect-[4/3]"
                                className="hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vision