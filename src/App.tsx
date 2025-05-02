import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { PropertiesForSalePage } from './pages/PropertiesForSale';
import { PropertiesForRentPage } from './pages/PropertiesForRent';
import { ServicesPage } from './pages/Services';
import { ContactPage } from './pages/Contact';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleLocationChange);

    // This is a simple client-side routing system
    const handleLinkClick = () => {
      setTimeout(() => {
        setCurrentPath(window.location.pathname);
        window.scrollTo(0, 0);
      }, 0);
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/properties/sale':
        return <PropertiesForSalePage />;
      case '/properties/rent':
        return <PropertiesForRentPage />;
      case '/services':
        return <ServicesPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  useEffect(() => {
    // Update the title based on the current page
    let title = 'EstateVue';
    switch (currentPath) {
      case '/properties/sale':
        title += ' | Properties For Sale';
        break;
      case '/properties/rent':
        title += ' | Properties For Rent';
        break;
      case '/services':
        title += ' | Our Services';
        break;
      case '/contact':
        title += ' | Contact Us';
        break;
      default:
        title += ' | Find Your Dream Property';
        break;
    }
    document.title = title;
  }, [currentPath]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;