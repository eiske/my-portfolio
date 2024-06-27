import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 container">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-lg mb-4">
        I am Vini, a front-end developer who loves making websites super awesome for users. I work with ReactJS, NextJS, JavaScript, and TypeScript. Specializing in systems and services ranging from web applications to mobile platforms. With an organized approach and self-discipline, I consistently strive to resolve issues with patience and precision. I want to work on cool digital projects where I can use my skills to make things even more amazing. Excited to be part of a fun team and create awesome experiences for people!
      </p>
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Programming Languages: JavaScript, TypeScript</li>
        <li>Frameworks: React, Next.js, Jest, Vue</li>
        <li>Project Management: Asana, Trello, Jira</li>
        <li>Dev Tools: Git</li>
        <li>Languages: English, Japanese</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="mb-4">
        <h3 className="font-bold">Valtech (October 2020 - Current)</h3>
        <p>Frontend Developer</p>
        <p>
          As a frontend developer, I create responsive components and pages for digital projects using frameworks like React and Vue, along with Next.js and Nuxt.
        </p>
        <p>
          My responsibilities include code maintenance, version control, and developing new features for various websites, integrating technologies such as React.js and Next.js with Contentful and Sitecore.
        </p>
        <p>Technology Stack: React Js, Next.js, TypeScript, Contentful, Sitecore, GraphQL, Jest, Ionic, Vitest, Azure DevOps, SASS, Storybook, Turborepo, Monorepo</p>
        <p>React Mentorship Experience: I guided a React course, assisting developers in enhancing their skills and solving complex challenges in modern web development.</p>
        <p>Mentor in the "V_Camp" Program: An innovative company initiative aimed at developing essential frontend skills in our employees. We guided participants from basic principles to intermediate React concepts, providing a solid foundation for their web development careers.</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Getmore (April 2019 – October 2020)</h3>
        <p>Frontend Developer</p>
        <p>In this role, I designed responsive components and Single Page Applications (SPAs) with state management using React and Redux.</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Shiftcode (January 2019 - March 2019)</h3>
        <p>Fullstack Intern</p>
        <p>As a full-stack intern, I contributed to developing a website by using Vue for the frontend and Node.js with MongoDB for the backend.</p>
      </div>
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <p className="mb-4">Unigran — Bachelor's degree Software Engineering (2021 - 2023)</p>
      <h2 className="text-2xl font-bold mb-4">Certifications</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Contentful Certified Professional</li>
        <li>Testing React with Jest and React Testing Library (Udemy)</li>
        <li>Next.js & React - The Complete Guide (Udemy)</li>
        <li>GraphQL (Udemy)</li>
      </ul>
      <Button className="bg-blue-500 text-white">
        <a href="/path-to-your-curriculum.pdf" download>
          Download Curriculum
        </a>
      </Button>
    </div>
  )
}