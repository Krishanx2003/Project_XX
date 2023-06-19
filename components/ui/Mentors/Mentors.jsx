import SectionWrapper from "../../SectionWrapper"
import GradientWrapper from "../../GradientWrapper"
import user1 from "../../../public/testimonial/men2.svg"
import user2 from "../../../public/testimonial/men3.svg"
import user3 from "../../../public/testimonial/men4.svg"
import user4 from "../../../public/testimonial/men5.svg"
import user5 from "../../../public/testimonial/men5.svg"
import user6 from "../../../public/testimonial/men5.svg"
import Image from "next/image"
import LayoutEffect from "../../LayoutEffect"

const Mentor = () => {

    const Mentors = [
        {
            avatar: user1,
            name: "Raghav",
            title: "Founder of CommXunity",
            quote: "At CommXunity, we understand that your tech journey is unique. That's why we offer mentorship programs designed to elevate your skills and guide you towards success"
        },
        {
            avatar: user2,
            name: "Raghav",
            title: "Founder of CommXunity",
            quote: "At CommXunity, we understand that your tech journey is unique. That's why we offer mentorship programs designed to elevate your skills and guide you towards success"
        },
        {
            avatar: user3,
            name: "Raghav",
            title: "Founder of CommXunity",
            quote: "At CommXunity, we understand that your tech journey is unique. That's why we offer mentorship programs designed to elevate your skills and guide you towards success"
        },
        {
            avatar: user4,
            name: "Raghav",
            title: "Founder of CommXunity",
            quote: "At CommXunity, we understand that your tech journey is unique. That's why we offer mentorship programs designed to elevate your skills and guide you towards success"
        },
        {
            avatar: user5,
            name: "Raghav",
            title: "Founder of CommXunity",
            quote: "At CommXunity, we understand that your tech journey is unique. That's why we offer mentorship programs designed to elevate your skills and guide you towards success"
        },
        {
            avatar: user6,
            name: "Raghav",
            title: "Founder of CommXunity",
            quote: "At CommXunity, we understand that your tech journey is unique. That's why we offer mentorship programs designed to elevate your skills and guide you towards success"
        },
    ]

    return (
        <SectionWrapper>
            <div id="Mentors" className="custom-screen text-gray-300">
                <div className="max-w-2xl text-center md:mx-auto">
                    <h2 className="text-gray-500 text-4xl font-semibold sm:text-4xl">
                    From Geek to Guru: Elevate Your Tech <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#9867F0] to-[#ED4E50]">Journey</span>
                    </h2>
                   
                </div>
                <GradientWrapper wrapperClassName="max-w-sm h-40 top-12 inset-x-0" className="mt-12">
                    <LayoutEffect
                        className="duration-1000 delay-300"
                        isInviewState={{
                            trueState: "opacity-1",
                            falseState: "opacity-0 translate-y-12"
                        }}
                    >
                        <ul className="grid gap-6 duration-1000 delay-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3">
                            {
                                Mentors.map((item, idx) => (
                                    <li key={idx} className="p-4 rounded-xl border border-gray-800"
                                        style={{
                                            backgroundImage: "radial-gradient(100% 100% at 50% 50%, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0) 100%)"
                                        }}
                                    >
                                        <figure className="flex flex-col justify-between gap-y-6 h-full">
                                            <blockquote className="">
                                                <p className="">
                                                    {item.quote}
                                                </p>
                                            </blockquote>
                                            <div className="flex items-center gap-x-4">
                                                <Image
                                                    src={item.avatar}
                                                    alt={item.name}
                                                    className="w-14 h-14 rounded-full object-cover"
                                                />
                                                <div>
                                                    <span className="block text-gray-50 font-semibold">{item.name}</span>
                                                    <span className="block text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ))
                            }
                        </ul>
                    </LayoutEffect>
                </GradientWrapper>
            </div>
        </SectionWrapper>
    )
}

export default Mentor