import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-300">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex">
        {/* Left Section */}
        <div className="w-2/3 p-8 bg-yellow-500 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold">Let's get started</h1>
              <Image
                src="/path-to-your-icon.png"
                alt="icon"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>

            <div className="mt-4 text-gray-600 flex items-center space-x-2">
              <span>XLS</span>
              <span>✈️</span>
              <span>RNW</span>
            </div>

            <div className="mt-8">
              <div className="flex justify-between text-gray-600">
                <span>Status</span>
                <span>Seat</span>
                <span>Group</span>
              </div>
              <div className="flex justify-between font-bold text-xl mt-2">
                <span>Now Boarding</span>
                <span>1A</span>
                <span>First Class</span>
              </div>
            </div>

            <p className="mt-8 text-sm text-gray-700">
              Runway's white glove service and intuitive design will get you up
              and running in a matter of hours—not weeks or months. Complex
              models welcome—we’ve seen it all.
            </p>
          </div>

          <div className="mt-8">
            <div className="bg-white w-16 h-16 p-2">
              <Image
                src="/path-to-your-qr-code.png"
                alt="QR Code"
                width={50}
                height={50}
              />
            </div>
            <p className="text-xs text-gray-600 mt-2">
              We’ll use the information you provide consistent with our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/3 p-8 bg-blue-50 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-right">
              <p className="text-gray-600"># RNW9170</p>
              <p className="text-gray-600">DATE: 26 AUG. 2024</p>
            </div>

            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="email"
              placeholder="Work Email"
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="text"
              placeholder="Job Title"
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div className="mt-8">
            <button className="w-full bg-yellow-500 text-white py-3 rounded-lg font-bold flex items-center justify-center">
              Get Access
              <span className="ml-2">➔</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
