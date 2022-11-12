import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/mahira_jalisha.jpg`} alt="" />
      </Link>
      <header>
        <h2>Mahira Jalisha</h2>
        <p><a href="mailto:mahirajalisha@gmail.com">mahirajalisha@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Mahira. I like learning and building things.
        I am currently working as a Data Science and Machine Learning Engineer at <a href="https://www.neovotech.com/">Neovotech</a>.
        I graduated from the <a href="http://ece.northsouth.edu/">ECE department of NSU</a>, majoring in CSE.
        Currently I am interested in Computer Vision, Natural Language Processing and MLOps.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Mahira Jalisha <Link to="/">mahirajalisha.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
