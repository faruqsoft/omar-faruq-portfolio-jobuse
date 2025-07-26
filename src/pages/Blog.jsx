const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Modern Web Development with React",
            excerpt: "Learn about the latest features and best practices in React development",
            date: "July 20, 2025",
            image: "https://placehold.co/400x250",
            category: "React",
            readTime: "5 min read"
        },
        {
            id: 2,
            title: "Building Scalable Backend Systems",
            excerpt: "A comprehensive guide to building scalable backend systems with Node.js",
            date: "July 15, 2025",
            image: "https://placehold.co/400x250",
            category: "Backend",
            readTime: "8 min read"
        },
        {
            id: 3,
            title: "Mastering TypeScript",
            excerpt: "Tips and tricks to become proficient in TypeScript",
            date: "July 10, 2025",
            image: "https://placehold.co/400x250",
            category: "TypeScript",
            readTime: "6 min read"
        }
    ];

    return (
        <div className="container mx-auto mt-12 py-16 px-4">
            <h2 className="text-4xl font-bold mb-8">Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">
                                    {post.category}
                                </span>
                                <span className="text-gray-500 text-sm">{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500 text-sm">{post.date}</span>
                                <button className="text-blue-600 hover:text-blue-700">Read More →</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
