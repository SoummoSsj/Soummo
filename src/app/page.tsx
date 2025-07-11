import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-6 font-inter text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-oklch-dark min-h-screen">
        {/* Home Section */}
        <section id="home" className="text-center mt-12">
          <h1 className="text-5xl font-bold">👋 Welcome to My Portfolio</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">I'm working on exciting stuff!</p>
        </section>

        {/* CV Section */}
        <section id="cv" className="mt-20 max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">📄 My CV</h2>
          <p className="text-sm mb-4">You can view or download my CV using the buttons below:</p>
          <div className="flex gap-4">
            <a href="/my-cv.pdf" target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">View CV</a>
            <a href="/my-cv.pdf" download className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Download CV</a>
          </div>
        </section>

        {/* Message Section */}
        <section id="message" className="mt-20 text-center text-gray-400 italic">
          <h2 className="text-xl font-semibold">💬 Messenger</h2>
          <p className="mt-2">Coming soon... stay tuned!</p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-20 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">📬 Contact Me</h2>
          <form className="flex flex-col gap-4 bg-white dark:bg-gray-800 p-6 rounded shadow">
            <input type="text" placeholder="Your Name" className="p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-black dark:text-white" />
            <input type="email" placeholder="Your Email" className="p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-black dark:text-white" />
            <textarea placeholder="Your Message" rows={5} className="p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-black dark:text-white"></textarea>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">Send</button>
          </form>
        </section>
      </main>
    </>
  );
}
