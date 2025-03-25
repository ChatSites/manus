import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Header Section */}
<header className="w-full bg-[#F65228] text-white p-6">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

          <div className="flex items-center mb-4 md:mb-0">
            <h1 className="text-3xl font-bold">ChatSites™ Portal</h1>
          </div>
          <nav className="flex space-x-6">
            <Link href="#ai-assistant" className="hover:text-[#B3341C] transition">AI Assistant</Link>
            <Link href="#dynamic-assets" className="hover:text-[#B3341C] transition">Dynamic Assets</Link>
            <Link href="#use-cases" className="hover:text-[#B3341C] transition">Use Cases</Link>
            <Link href="#explainer" className="hover:text-[#B3341C] transition">What is ChatSites?</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-black text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">The Future of Conversational Websites</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Experience the next generation of web interaction with voice-first, AI-powered websites that understand and respond to your needs.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition">
              Try the Demo
            </button>
            <button className="bg-transparent border-2 border-purple-600 hover:bg-purple-900 text-white font-bold py-3 px-8 rounded-full transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* AI Assistant Demo Section */}
      <section id="ai-assistant" className="w-full py-20 px-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">Interactive AI Assistant</h2>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2">
              <div className="bg-black rounded-xl p-8 shadow-2xl border border-purple-800">
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 rounded-full bg-purple-600 animate-pulse flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-purple-500 animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <p className="text-purple-300 font-medium">AI Assistant</p>
                    <p>Hello! I'm your ChatSites assistant. How can I help you today?</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 ml-12">
                    <p className="text-blue-300 font-medium">You</p>
                    <p>Tell me about your booking features</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <p className="text-purple-300 font-medium">AI Assistant</p>
                    <p>I'd be happy to explain our booking features! ChatSites offers seamless appointment scheduling, reservation management, and calendar integration. Would you like to see a demo?</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center bg-gray-800 rounded-full p-2">
                  <input 
                    type="text" 
                    placeholder="Ask me anything..." 
                    className="flex-grow bg-transparent border-none focus:outline-none text-white px-4"
                  />
                  <button className="bg-purple-600 hover:bg-purple-700 rounded-full p-2 ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <button className="bg-purple-600 hover:bg-purple-700 rounded-full p-2 ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Voice-First Experience</h3>
              <p className="mb-6">
                Our AI assistant communicates via both text and voice, powered by a realistic voice engine. The pulsating orb represents the AI's listening and thinking state.
              </p>
              <h3 className="text-2xl font-bold mb-4">Intelligent Interactions</h3>
              <p className="mb-6">
                The AI guides users through simulated customer interactions, showing how businesses can use ChatSites to answer questions, show dynamic assets, and complete tasks.
              </p>
              <h3 className="text-2xl font-bold mb-4">Customizable Interface</h3>
              <p>
                Businesses can customize the AI assistant with their brand colors, logo, and preferred interaction style to create a seamless extension of their brand experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Asset Portal Section */}
      <section id="dynamic-assets" className="w-full py-20 px-6 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">Dynamic Asset Portal</h2>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Contextual Content Display</h3>
              <p className="mb-6">
                The AI can dynamically render content as part of the conversation, including images, booking buttons, forms, product cards, and embedded media.
              </p>
              <h3 className="text-2xl font-bold mb-4">Dark Mode Activation</h3>
              <p className="mb-6">
                A sleek dark mode screen activates when assets are shown, creating a focused viewing experience that highlights the content being presented.
              </p>
              <h3 className="text-2xl font-bold mb-4">Seamless Integration</h3>
              <p>
                All dynamic assets are seamlessly integrated into the conversation flow, making the interaction feel natural and intuitive for users.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-900 rounded-xl p-8 shadow-2xl border border-purple-800">
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-2 text-purple-300">Product Showcase</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="h-32 bg-gray-700 rounded-lg mb-2"></div>
                      <h5 className="font-bold">Product 1</h5>
                      <p className="text-sm">$99.99</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="h-32 bg-gray-700 rounded-lg mb-2"></div>
                      <h5 className="font-bold">Product 2</h5>
                      <p className="text-sm">$149.99</p>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-2 text-purple-300">Booking Form</h4>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="space-y-2">
                      <div className="flex flex-col">
                        <label className="text-sm mb-1">Date</label>
                        <input type="text" className="bg-gray-700 rounded p-2" placeholder="Select date" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm mb-1">Time</label>
                        <input type="text" className="bg-gray-700 rounded p-2" placeholder="Select time" />
                      </div>
                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded transition mt-2">
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-purple-300">Video Content</h4>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Walkthrough Section */}
      <section id="use-cases" className="w-full py-20 px-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">Use Case Walkthroughs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black rounded-xl p-6 shadow-lg border border-purple-800 hover:border-purple-500 transition cursor-pointer">
              <div className="h-12 w-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Real Estate</h3>
              <p className="mb-4">Virtual property tours, instant neighborhood data, and scheduling viewings with voice commands.</p>
              <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center">
                Try Demo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="bg-black rounded-xl p-6 shadow-lg border border-purple-800 hover:border-purple-500 transition cursor-pointer">
              <div className="h-12 w-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">E-commerce</h3>
              <p className="mb-4">Voice shopping, personalized product recommendations, and seamless checkout experiences.</p>
              <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center">
                Try Demo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="bg-black rounded-xl p-6 shadow-lg border border-purple-800 hover:border-purple-500 transition cursor-pointer">
              <div className="h-12 w-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="mb-4">Interactive learning experiences, personalized tutoring, and course enrollment through conversation.</p>
              <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center">
                Try Demo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="bg-black rounded-xl p-6 shadow-lg border border-purple-800 hover:border-purple-500 transition cursor-pointer">
              <div className="h-12 w-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Support</h3>
              <p className="mb-4">24/7 intelligent support, troubleshooting guides, and seamless escalation to human agents when needed.</p>
              <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center">
                Try Demo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

