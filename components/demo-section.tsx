import { Sparkles } from "lucide-react";

export default function DemoSection() {
  return (
    <section className="container mx-auto px-4 pb-8 relative overflow-hidden">
      {/* Removed the local background since we now have a global gradient */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* ─── Left Column: Your notes + transcript ─── */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row">
              {/* — Left: avatars, stuck to bottom */}
              <div className="hidden md:flex-col justify-end space-y-2 mb-10 md:flex">
                <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-white shadow-md">
                  <img
                    src="https://www.granola.ai/_next/image?url=%2FhomepageAssets%2FvideoThumb1.jpg&w=3840&q=75"
                    alt="Participant 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-white shadow-md">
                  <img
                    src="https://www.granola.ai/_next/image?url=%2FhomepageAssets%2FvideoThumb3.jpg&w=3840&q=75"
                    alt="Participant 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* — Right: transcript box */}
              <div className="flex-1 flex flex-col gap-4 pt-6">
                <p className="text-xl text-gray-700 font-medium">
                  Your notes + transcript
                </p>
                <div className="flex-1 flex flex-col min-h-0 bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* window controls bar */}
                  <div className="flex items-center space-x-2 px-4 py-2 border-b">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  {/* content area */}
                  <div className="p-6 flex-1 min-h-[35rem] justify-between flex flex-col overflow-scroll">
                    <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Intro call: AllFound
                    </h3>
                    <div className="flex items-center space-x-2 mb-6">
                      <span className="text-gray-500">3:30pm</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden">
                          <img
                            src="/placeholder.svg?height=24&width=24"
                            alt="User"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-gray-700">Jess +1</span>
                      </div>
                    </div>

                    <div className="space-y-4 text-gray-800 mb-8">
                      <p>100, growingg</p>
                      <p>use tuesday.ai, v manual,</p>
                      <p>180</p>
                      <p>"a priority for q2"</p>
                    </div>

                    </div>
                    

                    <div className="flex justify-center">
                      <div className="bg-white rounded-full shadow-md px-6 py-2 flex items-center space-x-4">
                        <div className="flex items-end h-6 space-x-1">
                          <div className="w-1 bg-green-500 rounded-full origin-bottom animate-audiowave1"></div>
                          <div className="w-1 bg-green-500 rounded-full origin-bottom animate-audiowave2"></div>
                          <div className="w-1 bg-green-500 rounded-full origin-bottom animate-audiowave3"></div>
                          <div className="w-1 bg-green-500 rounded-full origin-bottom animate-audiowave2"></div>
                          <div className="w-1 bg-green-500 rounded-full origin-bottom animate-audiowave1"></div>
                        </div>
                        <div className="w-5 h-5 bg-gray-400 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Right Column: AI enhanced ─── */}
          <div className="flex flex-col space-y-4">
            <p className="text-xl text-gray-700 font-medium flex flex-row">
              <Sparkles color="#94f27f" />
              AI enhanced
            </p>

            <div className="flex-1 flex flex-col min-h-0 bg-white rounded-lg shadow-lg overflow-hidden">
              {/* window controls bar */}
              <div className="flex items-center space-x-2 px-4 py-2 border-b">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              {/* content area */}
              <div className="p-6 flex-1 max-h-[35rem] overflow-scroll space-y-6">
                <h3 className="text-2xl font-bold mb-2">
                  Intro call: AllFound
                </h3>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">
                    AllFound Overview
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-black mt-2 mr-2"></span>
                      <span>100 employees, adding 20 more next quarter</span>
                    </li>
                    <li className="flex items-start pl-4">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2"></span>
                      <span className="text-gray-600">
                        Office in San Francisco and Austin
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">
                    Current Provider (Tuesday.ai)
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-black mt-2 mr-2"></span>
                      <span>Data input is too manual</span>
                    </li>
                    <li className="flex items-start pl-4">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2"></span>
                      <span className="text-gray-600">
                        Too complex for non-technical team members
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-black mt-2 mr-2"></span>
                      <span>$180 per employee per year ("too expensive")</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">
                    Their Requirements
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-black mt-2 mr-2"></span>
                      <span>
                        Finding a better employee engagement tool is "a priority
                        for Q2"
                      </span>
                    </li>
                    <li className="flex items-start pl-4">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2"></span>
                      <span className="text-gray-600">
                        Need secure information sharing capabilities
                      </span>
                    </li>
                    <li className="flex items-start pl-4">
                      <span className="inline-block w-1.5 h-1.5 rounded-block bg-gray-400 mt-2 mr-2"></span>
                      <span className="text-gray-600">
                        One-way or two-way data sharing required, contingent on
                        internal approval
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Next steps</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start pl-4">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2"></span>
                      <span className="text-gray-600">
                        Jess to send over information pack
                      </span>
                    </li>
                    <li className="flex items-start pl-4">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2"></span>
                      <span className="text-gray-600">
                        Jess to send contract if we want to proceed
                      </span>
                    </li>
                    <li className="flex items-start pl-4">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2"></span>
                      <span className="text-gray-600">
                        Catchup scheduled for next week to figure out
                        contractual details
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
