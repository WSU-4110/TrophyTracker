import { type Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    designation: "Gaming Enthusiast",
    content:
      "TrophyTracker has completely changed the way I approach gaming achievements. The interface is user-friendly, and the ability to track progress across multiple platforms is unmatched. Highly recommended for any serious gamer!",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Alberto Gomez",
    designation: "Professional Gamer",
    content:
      "With TrophyTracker, I've found a community that shares my passion for gaming. The leaderboards are a fantastic way to fuel my competitive spirit, and the forums are great for tips and tricks. An absolute must-have for the gaming community.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Chris Dupont",
    designation: "Game Developer",
    content:
      "As a developer, seeing how engaged users are with TrophyTracker is fantastic. It's a platform that not only enhances the gaming experience for players but also offers valuable insights for developers looking to improve their games.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Users Say"
          paragraph="Hear from our users and find out why TrophyTracker is the best platform for tracking your gaming achievements."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
