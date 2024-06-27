import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
      <p className="text-lg mb-6 text-center">
        Hi, I'm Vinicius Eiske Hashimoto, a passionate front-end developer specializing in building exceptional digital experiences with ReactJS, NextJS, JavaScript, and TypeScript.
      </p>
      <nav className="flex space-x-4">
        <Link className="text-blue-500 hover:underline" href="/about">
          About
        </Link>
      </nav>
      <div className="flex space-x-4">
        <a href="https://github.com/eiske" className="text-gray-600 hover:text-gray-900">
          GitHub
        </a>
        <a href="https://linkedin.com/in/eiske" className="text-gray-600 hover:text-gray-900">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
