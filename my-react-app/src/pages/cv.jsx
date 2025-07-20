// src/pages/CV.jsx
import React from 'react';
// import profilePic from './public/profile.jpg'; // ✅ Add your image here or use a URL

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-8 ">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg flex flex-col md:flex-row overflow-hidden">
        {/* === Left Column (Sidebar) === */}
        <aside className="bg-blue-900 text-white w-full md:w-1/3 p-6 flex flex-col items-center text-center">
          {/* Profile Image */}
          <img
            src={'/CV.jpg'}
            alt="Jayfa Mubarak"
            className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg mb-4"
          />

          <h1 className="text-3xl font-bold">Jayfa Mubarak</h1>
          <p className="text-md text-blue-200 mt-1">Undergraduate | Full-stack Developer</p>

          <div className="mt-6 text-sm space-y-6 w-full text-left">
            {/* Contact */}
            <div>
              <h2 className="font-semibold text-xl border-b border-blue-400 pb-1 mb-2"> Contact</h2>
              <p className="mt-4 text-[16px]">  Ampara, Sri Lanka</p>
              <p className="mt-4 text-[16px]"> +94 77 280 0941</p>
              <p className="mt-4 text-[16px]"> jayfamubarak@gmail.com</p>
              <p  className="mt-4 text-[16px]" >
                🔗{' '}
                <a
                  href="https://github.com/JayfaAnjum"
                  className="underline text-blue-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </p>
              <p  className="mt-4">
                🔗{' '}
                <a
                  href="https://linkedin.com/in/yourlinkedin"
                  className="underline text-blue-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>

            {/* Skills */}
            <div>
              <h2 className="font-semibold text-xl border-b border-blue-400 pb-1 mb-5"> Skills</h2>
              <ul className="list-disc list-inside space-y-3 text-[16px]">
                <li>React.js, Node.js, Laravel</li>
                <li>MongoDB, MySQL</li>
                <li>Tailwind CSS, Express</li>
                <li>Git & GitHub</li>
                <li>Postman, Thunder Client</li>
                <li>DSA</li>
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h2 className="font-semibold text-xl border-b border-blue-400 pb-1 mb-5"> Languages</h2>
              <ul className="list-disc text-[16px] list-inside space-y-3">
                <li>Tamil (Native)</li>
                <li>English (Fluent)</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div>
              <h2 className="font-semibold text-xl border-b border-blue-400 pb-1 mb-5"> Soft Skills</h2>
              <ul className="list-disc text-[16px] list-inside space-y-4">
                <li>Team Collaboration</li>
                 <li>Quick Learner</li>
                <li>Problem Solving</li>
                <li>Adaptability</li>
                <li>Communication</li>
              </ul>
            </div>
          </div>
        </aside>

        {/* === Right Column (Main) === */}
        <main className="w-full md:w-2/3 p-8 space-y-10">
  {/* Objective */}
  <section className="pb-15 border-b-2 border-gray-200">
    <h2 className="text-xl font-bold text-blue-900 mb-3"> CAREER OBJECTIVE</h2>
    <p className="text-gray-700 leading-relaxed text-md">
      Enthusiastic 3rd-year undergraduate student at the University of Jaffna, passionate about full-stack
      web development using MERN stack and Laravel. Eager to apply knowledge in real-world projects through
      internships and junior roles.
    </p>
  </section>

  {/* Education */}
  <section className="pb-10 border-b-2 border-gray-200">
    <h2 className="text-xl font-bold text-blue-900 mb-3"> EDUCATION</h2>
    <p className="text-gray-700">
      <strong>B.Sc. in Computer Science</strong> <br />
      University of Jaffna <br />
      <span className="text-gray-500">Expected Graduation: 2025</span>
    </p>
  </section>

  {/* Projects */}
  <section className="pb-10 border-b-2 border-gray-200">
    <h2 className="text-xl font-bold text-blue-900 mb-3"> PROJECTS</h2>

    <div className="mb-10">
  <p className="font-medium text-lg text-gray-800">
    School Management System (Team Project) – <span className="italic text-sm text-gray-500">Ongoing</span>
  </p>
  <p className="text-gray-700 mb-2">
    <strong>Tech Stack:</strong> Laravel, React, Tailwind CSS, OR-Tools, SMTP Mail
  </p>
  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
    <li>Designed the front page UI and user interface for teacher-class-subject assignments</li>
    <li>Integrated Google OR-Tools for automated timetable generation</li>
    <li>Developed email functionality using SMTP to send username and password on user registration</li>
    <li>Tested backend APIs using Thunder Client</li>
   
   <li>  <a
                  href="https://github.com/WebWarriors-group/School-Management-System.git"
                  className="underline text-blue-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  School Database Management System
                </a>
                </li>
  </ul>
</div>


    <div>
      <p className="font-medium text-lg text-gray-800"> E-commerce Website (Ongoing)</p>
      <p className="text-gray-700 mb-2">
        <strong>Tech Stack:</strong> MERN Stack
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
        <li>Product listing, filters, shopping cart</li>
        <li>Integrated Typesense for fast product search</li>
        <li>Added cursor-based pagination with MongoDB</li>
      </ul>
    </div>
  </section>

  {/* References */}
  <section className="pb-6 ">
    <h2 className="text-xl font-bold text-blue-900 mb-3">REFERENCES</h2>
    <p className="text-gray-700">Available upon request.</p>
  </section>
</main>

      </div>
    </div>
  );
}
