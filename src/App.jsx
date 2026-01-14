import React from 'react';
import './App.css';

export default function App() {
  return (
    <div>
      <header>
        <h1>Hallo verden!</h1>
      </header>
      <section id="about">
        <h2>Egil</h2>
        <p>Webutvikler</p>
        <p>28 år</p>
        <p>Sunnmøre Norge</p>
      </section>

       <section id="languages">
        <h2>Hva jeg kan</h2>
        <p>Jobbet 10+ år med HTML, CSS, Javascript i egne prosjekter</p>
        <p>Jobbet litt med PHP og SQL de siste årene</p>
        <p>Nylig begynt å lære og bruke React, Vite og Next.js</p>
      </section>

      <section id="projects">
        <h2>Ting jeg har laget</h2>
        <div>
          <a href='https://yztay.onrender.com/'>Yatzy</a>
          <a href='https://math-game-lac-six.vercel.app/'>QuickMath</a>
          <a href='https://reminders-liart.vercel.app/'>Reminders</a>
          <a href='https://news-chi-two-59.vercel.app/'>Next.js Cat News Demo</a>
          <a href='https://post-thing.vercel.app/'>TimePost</a>
          <a href='https://wiki-quiz-sage.vercel.app/'>WikiQuiz (not available)</a>
          <a href='https://cat-nine-kohl.vercel.app/'>CatFacts 1999</a>
        </div>
      </section>

      <section id="contact">
        <h2>Kontakt</h2>
        <div>
          <a href='mailto:egil97.dev@gmail.com'>Email: egil97.dev@gmail.com</a>
          <a href='https://github.com/xep97'>Github</a>
        </div>

      </section>
    </div>
  );
}
