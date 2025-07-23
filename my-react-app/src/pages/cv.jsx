""// src/pages/CV.jsx
import React from 'react';

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl flex flex-col md:flex-row overflow-hidden">
        {/* === Sidebar === */}
        <aside className="bg-blue-900 text-white w-full md:w-1/3 p-6 space-y-6">
          <div className="flex flex-col items-center">
            <img
              src={'/nine.jpg'}
              alt="Jayfa Mubarak"
              className="w-28 h-28 rounded-full border-4 border-white object-cover object-center shadow-md mb-2"
            />
            <h1 className="text-2xl font-bold">Jayfa Mubarak</h1>
            <p className="text-blue-200 text-sm">Full-stack Developer</p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold text-lg border-b border-blue-400 pb-1 mb-2">Contact</h2>
            <p> Ampara, Sri Lanka</p>
            <p> +94 77 280 0941</p>
            <p> jayfamubarak@gmail.com</p>
            <p>🔗 <a href="https://github.com/JayfaAnjum" className="underline text-blue-200" target="_blank" rel="noreferrer">GitHub</a></p>
            <p>🔗 <a href="https://www.linkedin.com/in/jayfamubark3/" className="underline text-blue-200" target="_blank" rel="noreferrer">LinkedIn</a></p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="font-semibold text-lg border-b border-blue-400 pb-1 mb-2">Technical Skills</h2>
            <div className="text-sm space-y-3">
              <div>
                <h3 className="font-semibold text-gray-200">Languages</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>HTML & CSS</li>
                  <li>PHP</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-200">Frameworks & Libraries</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>React.js, Node.js, Express.js</li>
                  <li>Laravel, Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-200">Databases</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>MongoDB, MySQL</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-200">Tools</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Git, GitHub, Postman</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h2 className="font-semibold text-lg border-b border-blue-400 pb-1 mb-2">Soft Skills</h2>
            <ul className="list-disc list-inside ml-4 text-sm space-y-1">
              <li>Team Collaboration</li>
              <li>Quick Learner</li>
              <li>Problem Solving</li>
              <li>Adaptability</li>
              <li>Effective Communication</li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h2 className="font-semibold text-lg border-b border-blue-400 pb-1 mb-2">Languages</h2>
            <ul className="list-disc list-inside ml-4 text-sm">
              <li>Tamil – Native</li>
              <li>English – Fluent</li>
            </ul>
          </div>
        </aside>

        {/* === Main Content === */}
        <main className="w-full md:w-2/3 p-6 space-y-6">
          {/* Summary */}
          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-2">Summary</h2>
            <p className="text-gray-700 text-sm">
              Motivated Computer Science undergraduate at the University of Jaffna with hands-on experience in full-stack development using the MERN Stack and Laravel. Skilled in building scalable web apps and modern UIs with Tailwind CSS. Strong team player with a passion for problem-solving and continuous learning. Seeking an internship or entry-level role to grow as a full-stack developer.
            </p>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-2">Education</h2>
            <div className="text-sm text-gray-700 space-y-2">
              <div>
                <p className="font-medium">BSc (Hons) in Computer Science</p>
                <p>University of Jaffna, Sri Lanka</p>
                <p className="text-gray-500">GPA: 2.92 / 4.00 | Expected Graduation: 2026</p>
              </div>
              <div>
                <p className="font-medium">G.C.E Advanced Level – Physical Science Stream</p>
                <p>Mahmud Ladies College, Kalmunai</p>
                <p className="text-gray-500">Results: Combined Mathematics – A, Physics – B, Chemistry – C</p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-2">Projects</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-800">School Management System <span className="text-sm italic text-gray-500">– Ongoing</span></p>
                <p className="text-sm text-gray-700">Tech Stack: Laravel, React.js, Tailwind CSS, Google OR-Tools, SMTP, Firebase</p>
                <ul className="list-disc text-sm text-gray-700 ml-5 space-y-1">
                  <li>Auto-generates student reports and IDs</li>
                  <li>Integrated Google OR-Tools for scheduling</li>
                  <li>Role-based auth with Laravel Breeze</li>
                  <li>Email alerts and gallery support</li>
                  <li>Firebase social login (Google/GitHub)</li>
                </ul>
                <p className="mt-1 text-sm">🔗 <a href="https://github.com/WebWarriors-group/School-Management-System.git" className="underline text-blue-500" target="_blank" rel="noreferrer">View Project</a></p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">E-commerce Website</p>
                <p className="text-sm text-gray-700">Tech Stack: MERN Stack, Redux, Stripe</p>
                <ul className="list-disc text-sm text-gray-700 ml-5 space-y-1">
                  <li>Responsive frontend with product filters</li>
                  <li>Redux-managed global state</li>
                  <li>Stripe payment integration</li>
                  <li>Instant search with Typesense</li>
                  <li>JWT sessions & MongoDB pagination</li>
                </ul>
                <p className="mt-1 text-sm">🔗 <a href="https://github.com/JayfaAnjum/my-first-MERN-stack-project.git" className="underline text-blue-500" target="_blank" rel="noreferrer">View Project</a></p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-2">Certifications</h2>
            <ul className="list-disc text-sm list-inside text-gray-700 ml-4 space-y-1">
              <li>Full-Stack Web Development – Learning (University of Moratuwa, 2025)</li>
              <li>JavaScript Data Structures & Algorithms – Learning (freeCodeCamp, 2025)</li>
              <li>Foundation in IT & English – Completed (BCAS, 2021)</li>
            </ul>
          </section>

          {/* References */}
          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-2">References</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold">Dr. (Mrs) B. Mayurathan</p>
                <p>Senior Lecturer, Gr.1</p>
                <p>Dept. of Computer Science</p>
                <p>University of Jaffna</p>
                <p>Email: barathym@univ.jfn.ac.lk</p>
              </div>
              <div>
                <p className="font-semibold">Dr. (Ms) J. Samantha Tharani</p>
                <p>Senior Lecturer, Gr.II</p>
                <p>Dept. of Computer Science</p>
                <p>University of Jaffna</p>
                <p>Email: samanthaj@univ.jfn.ac.lk</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
