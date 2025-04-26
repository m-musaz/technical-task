export default function DemoSection() {
  return (
    <section className="container mx-auto px-4 py-12 relative overflow-hidden">
      {/* Removed the local background since we now have a global gradient */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <p className="text-xl text-gray-700 font-medium">Your notes + transcript</p>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
              <div className="flex items-center space-x-2 px-4 py-2 border-b">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Intro call: AllFound</h3>
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
                <div className="space-y-4 text-gray-800">
                  <p>100, growingg</p>
                  <p>use tuesday.ai, v manual,</p>
                  <p>180</p>
                  <p>"a priority for q2"</p>
                </div>

                <div className="mt-16 flex space-x-2">
                  <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-white shadow-md">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Participant 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-white shadow-md">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Participant 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <div className="bg-white rounded-full shadow-md px-6 py-2 flex items-center space-x-4">
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 5a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"></path>
                      <path d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"></path>
                      <path d="M4 15a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"></path>
                    </svg>
                    <div className="w-5 h-5 bg-gray-400 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 hidden md:block">
              <div className="bg-white rounded-full shadow-md p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xl text-gray-700 font-medium">AI enhanced</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex items-center space-x-2 px-4 py-2 border-b">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Intro call: AllFound</h3>
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

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">AllFound Overview</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-black mt-2 mr-2"></span>
                        <span>100 employees, adding 20 more next quarter</span>
                      </li>
                      <li className="flex items-start pl-4">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2"></span>
                        <span className="text-gray-600">Office in San Francisco and Austin</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Current Provider (Tuesday.ai)</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-black mt-2 mr-2"></span>
                        <span>Data input is too manual</span>
                      </li>
                      <li className="flex items-start pl-4">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2"></span>
                        <span className="text-gray-600">Too complex for non-technical team members</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-black mt-2 mr-2"></span>
                        <span>$180 per employee per year ("too expensive")</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Their Requirements</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-black mt-2 mr-2"></span>
                        <span>Finding a better employee engagement tool is "a priority for Q2"</span>
                      </li>
                      <li className="flex items-start pl-4">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2"></span>
                        <span className="text-gray-600">Need secure information sharing capabilities</span>
                      </li>
                      <li className="flex items-start pl-4">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2"></span>
                        <span className="text-gray-600">
                          One-way or two-way data sharing required, contingent on internal approval
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Next steps</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start pl-4">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2"></span>
                        <span className="text-gray-600">Jess to send over information pack</span>
                      </li>
                      <li className="flex items-start pl-4">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2"></span>
                        <span className="text-gray-600">Jess to send contract if we want to proceed</span>
                      </li>
                      <li className="flex items-start pl-4">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2"></span>
                        <span className="text-gray-600">
                          Catchup scheduled for next week to figure out contractual details
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
