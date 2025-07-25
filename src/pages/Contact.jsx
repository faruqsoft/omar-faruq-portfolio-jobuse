const Contact = () => {
    return (
        <div className="container mx-auto py-16 px-4">
            <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                    <p className="mb-6">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium mb-2">Email</h4>
                            <p className="text-gray-600">your.email@example.com</p>
                        </div>
                        <div>
                            <h4 className="font-medium mb-2">Phone</h4>
                            <p className="text-gray-600">+1 234 567 890</p>
                        </div>
                        <div>
                            <h4 className="font-medium mb-2">Location</h4>
                            <p className="text-gray-600">City, Country</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Subject"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
