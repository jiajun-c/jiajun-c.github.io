import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Terminal from './components/Terminal/Terminal';
import ArticleView from './components/ArticleView/ArticleView';
import AboutView from './components/AboutView/AboutView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Terminal username="kota" hostname="blog" />} />
        <Route path="/article/:slug" element={<ArticleView />} />
        <Route path="/about" element={<AboutView />} />
      </Routes>
    </Router>
  );
}

export default App
