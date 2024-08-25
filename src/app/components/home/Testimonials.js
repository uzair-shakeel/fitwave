"use client";
import React, { useEffect, useRef } from "react";
import Card from "./Cards";

const testimonials = [
  {
    image: "/path-to-image1.jpg",
    name: "Tamasin Ford",
    title: "COO",
    company: "Molecule",
    quote:
      "The financial model is the blueprint, and Runway is the tool to transform it into powerful scenario planning.",
  },
  // Add more testimonials here...
];

const TestimonialSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card, index) => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight) {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center py-10">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          image={testimonial.image}
          name={testimonial.name}
          title={testimonial.title}
          company={testimonial.company}
          quote={testimonial.quote}
        />
      ))}
    </div>
  );
};

export default TestimonialSection;
