import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/ui/Layout';
import { Home } from './pages/Home';

// Placeholder Components for secondary pages
const Features = () => (
    <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl font-bold mb-6">All Features</h1>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Deep dive into our comprehensive suite of automation tools.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-card p-8 rounded-2xl border border-dark-border">
                <h3 className="text-2xl font-bold mb-4">Advanced Analytics</h3>
                <p className="text-gray-400">Track every interaction and conversation with granular detail.</p>
            </div>
            <div className="bg-dark-card p-8 rounded-2xl border border-dark-border">
                <h3 className="text-2xl font-bold mb-4">Sentiment Analysis</h3>
                <p className="text-gray-400">Understand customer mood and adjust responses automatically.</p>
            </div>
        </div>
    </div>
);

const About = () => (
    <div className="container mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-gray-400">To liberate human creativity by automating the repetitive tasks that hold businesses back.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1,2,3].map(i => (
                <div key={i} className="text-center">
                    <img src={`https://picsum.photos/300/300?random=${i+10}`} alt="Team Member" className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-dark-card" />
                    <h3 className="text-xl font-bold">Team Member {i}</h3>
                    <p className="text-gray-500">Co-Founder</p>
                </div>
            ))}
        </div>
    </div>
);

const Contact = () => (
    <div className="container mx-auto px-6 py-32">
        <div className="max-w-xl mx-auto bg-dark-card border border-dark-border p-8 rounded-3xl shadow-2xl">
            <h1 className="text-3xl font-bold mb-8 text-center">Get in Touch</h1>
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input type="text" className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input type="email" className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Tell us about your needs..."></textarea>
                </div>
                <button className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors">Send Message</button>
            </form>
        </div>
    </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;