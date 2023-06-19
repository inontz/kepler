import Image from "next/image";
import { keplerBd } from "@/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center"></div>
      <section className="w-full text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="mb-10">
            <h1
              className={`${keplerBd.className} sm:text-3xl text-4xl font-medium title-font text-kepler-main`}
            >
              KEPLER
            </h1>
            {/* <Image src='/img/kepler_word.svg' alt='kepler' width={200} height={300} quality={100} /> */}
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 text-kepler-red">
              Web portal for my projects.
            </p>
            <div className="flex mt-6 justify-start">
              <div className="w-16 h-1 rounded-full bg-kepler-main inline-flex"></div>
            </div>
          </div>

          <div className="flex items-center mx-auto border-b pb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-32 w-32 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <Image
                src="/icon/icons8-line-cloud/icons8-line-500.svg"
                width={500}
                height={500}
                alt="Line icon"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                LINE
              </h2>
              <p className="leading-relaxed text-base">
                Tools for implement with LINE API.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Explore
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex items-center mx-auto border-b pb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-32 w-32 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <Image
                src="/icon/icon8-api-cloud/api-icon.svg"
                width={500}
                height={500}
                alt="API icon"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                API
              </h2>
              <p className="leading-relaxed text-base">
                API Tools for Kepler projects.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Explore
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex items-center mx-auto border-b pb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-32 w-32 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <Image
                src="/img/berlin_color.svg"
                width={250}
                height={250}
                alt="Berlin Logo"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Berlin
              </h2>
              <p className="leading-relaxed text-base">Just Berlin house .</p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Explore
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
