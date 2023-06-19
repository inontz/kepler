import Image from "next/image";
import { keplerBd } from "@/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-9 bg-grid-mask">
      {/* <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center"></div> */}
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <h1
          className={`${keplerBd.className} lg:static lg:w-auto text-5xl text-kepler-main`}
        >
          PORTAL
        </h1>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://portal.inontz.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/kepler_logo.svg"
              alt="kepler"
              width={100}
              height={24}
            />
          </a>
        </div>
      </div>
      <div className="mb-32 grid text-center justify-items-center lg:grid-cols-4 lg:text-left">
        <a
          href="https://portal.inontz.xyz"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icon/icons8-line-cloud/icons8-line-500.svg"
            width={200}
            height={200}
            alt="Line icon"
          />
          <h2 className={`mb-3 text-2xl text-center font-semibold`}>LINE</h2>
          <p className={`m-0 text-sm text-center opacity-50`}>
            Tools for implement with LINE API.
          </p>
        </a>
        <a
          href="https://portal.inontz.xyz"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icon/icon8-api-cloud/api-icon.svg"
            width={200}
            height={200}
            alt="API icon"
          />
          <h2 className={`mb-3 text-2xl text-center font-semibold`}>API</h2>
          <p className={`m-0 max-w-[30ch] text-sm text-center opacity-50`}>
            API Tools for Kepler projects.
          </p>
        </a>
        <a
          href="https://portal.inontz.xyz"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/img/berlin_color.svg"
            width={200}
            height={200}
            alt="Berlin"
          />
          <h2 className={`mb-3 text-2xl text-center font-semibold`}>Berlin</h2>
          <p className={`m-0 max-w-[30ch] text-sm text-center opacity-50`}>
            Just Berlin house . 🐱‍🚀
          </p>
        </a>
      </div>
    </main>
  );
}
