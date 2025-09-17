import TestimonialsItem from "../components/TestimonialsItem";
import { testimonials } from "../constants";

const Testimonials = () => {
    const halfLength = Math.floor(testimonials.length / 2);

    return (
        <section className="relative py-24 z-2 md:py-28 lg:py-40">
            <div className="container block lg:flex">
                <div className="relative mr-20 testimonials_hea-res z-2 flex-300">
                    <p className="mb-5 caption max-md:mb-2.5">
                        Wall of Love
                    </p>

                    <h3 className="h3 text-p4 max-md:h5">
                        Words from our fans
                    </h3>
                </div>

                <div className="relative flex items-start -my-12 -mr-3 testimonials_inner-after testimonials_inner-before max-lg:static max-md:block">
                    <div className="testimonials_group-after flex-50">
                        {testimonials.slice(0, halfLength).map((testimonial) => (
                            <TestimonialsItem key={testimonial.id} item={testimonial} containerClassName="last:after:hidden last:after:max-md:block" />
                        ))}
                    </div>

                    <div className="flex-50">
                        {testimonials.slice(halfLength).map((testimonial) => (
                            <TestimonialsItem key={testimonial.id} item={testimonial} containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Testimonials;
