import React from 'react';
import './App.css';

import {Navbar} from './components';
import {About, Blogs, Contact, Features, Footer, Header, Testimonials} from './containers'


const App = () => (
    <div>
        <div>
            <Navbar />
            <Header />
        </div>
        <About />
        <Features />
        <Testimonials />
        <Blogs />
        <Contact />
        <Footer />
    </div>
);

export default App;