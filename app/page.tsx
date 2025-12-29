import Terminal from "./components/Terminal";
import Browser from "./components/Browser";
import Photos from "./components/Photos";
import PersonalProfile from "./components/PersonalProfile";
import WorkProfile from "./components/WorkProfile";
import Projects from "./components/Projects";

export default function Page() {
  return (
    <div className="scroll-smooth">
      {/* <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950"
      >
        
      </section> */}

      <section id="about" className="min-h-screen bg-white dark:bg-gray-900">
        <PersonalProfile />
        <WorkProfile />
      </section>

      <section id="portfolio" className="min-h-screen">
        <Projects />
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950"
      >
        <div className="max-w-4xl mx-auto px-8 py-20">
          <div className=" rounded-3xl shadow-sm  border-gray-200 dark:border-gray-800 p-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="text-5xl">📧</span>
              <span>Get In Touch</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
              Have a project in mind or want to collaborate? Feel free to reach
              out!
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-colors shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
