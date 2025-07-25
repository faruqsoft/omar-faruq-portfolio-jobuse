import { motion } from 'framer-motion';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Provat Suttrodhor",
            position: "CEO, Tech Startup",
            image: "https://placehold.co/100x100",
            quote: "Outstanding full-stack developer who delivered our project on time with excellent quality. The code structure and documentation were exceptional.",
            rating: 5
        },
        {
            name: "Bokul Dev",
            position: "Product Manager",
            image: "https://placehold.co/100x100",
            quote: "Excellent problem-solving skills and great attention to detail. The API architecture and frontend implementation were exactly what we needed.",
            rating: 5
        },
        {
            name: "Masum CMS",
            position: "Tech Lead",
            image: "https://placehold.co/100x100",
            quote: "Great experience working together. Strong understanding of both frontend and backend technologies. Would definitely recommend!",
            rating: 5
        }
    ];

    return (
        <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Client Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{
                            y: -10,
                            boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
                        }}
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h3 className="font-semibold">{testimonial.name}</h3>
                                <p className="text-gray-600 text-sm">{testimonial.position}</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <span key={i} className="text-yellow-400">★</span>
                            ))}
                        </div>
                        <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default TestimonialsSection;
