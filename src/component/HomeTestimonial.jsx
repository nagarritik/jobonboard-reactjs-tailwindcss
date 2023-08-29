import React from "react";
import HomeTestimonialTile from "./HomeTestimonialTile";

function HomeTestimonial() {
  const testimonial = [
    {
      title: "A Game-Changer for Our Customer Service",
      summary:
        "Implementing this customer success software was a turning point for our business. It streamlined our support process and empowered our team to provide exceptional service. The insights and analytics offered helped us understand our customers better than ever before. Our clients are happier, and our business is thriving!",
      imgUrl: "https://superio-nextjs.netlify.app/images/resource/testi-thumb-2.png",
      name: "Samantha Williams",
      designation: "Customer Support Manager",
    },
    {
      title: "Fluent in No Time!",
      summary:
        "I always wanted to learn a new language, but time was a constraint. Then I found this language learning app. The interactive lessons, quizzes, and real-life practice made learning enjoyable. I'm amazed at how quickly I've progressed. I now confidently converse with native speakers, all thanks to this app.",
      imgUrl: "https://superio-nextjs.netlify.app/images/resource/testi-thumb-1.png",
      name: "Alex Rodriguez",
      designation: "Marketing Specialist",
    },
    {
      title: "Securing My Financial Future",
      summary:
        "Navigating personal finance was overwhelming until I started using this financial planning platform. It's like having a virtual advisor. The tools helped me create a solid financial plan, and the investment insights have been invaluable. I'm on track to achieve my financial goals, and the peace of mind I have now is priceless.",
      imgUrl: "https://superio-nextjs.netlify.app/images/resource/testi-thumb-3.png",
      name: "Emily Chen",
      designation: "Project Manager",
    },
  ];

  return (
    <div className="bg-blue-50 flex flex-col justify-center items-center py-12">
      <p className="text-3xl font-medium mb-3">
        Testimonials From Our Customers
      </p>
      <span className="text-gray-500">
        Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
      </span>
      <div className="grid grid-cols-2 gap-8 my-8">
        {
          testimonial.map(item=><HomeTestimonialTile data={item}/>)
        }
      </div>
    </div>
  );
}

export default HomeTestimonial;
