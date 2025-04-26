export default function IOSAccessPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Get iOS Early Access</h1>

      <div className="max-w-md mx-auto">
        <form className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                How will you use Granola?
              </label>
              <textarea
                id="reason"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Tell us a bit about how you plan to use Granola"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-400 hover:bg-green-500 text-black font-medium py-2 px-4 rounded-md transition-colors"
            >
              Request Early Access
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
