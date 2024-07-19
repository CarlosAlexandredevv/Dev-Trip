import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = 'DevTrip';

    switch (path) {
      case '/':
        title += ' | Home';
        break;
      case '/passagens':
        title += ' | Passagens';
        break;
      case '/pacotes':
        title += ' | Pacotes';
        break;
      case '/hoteis':
        title += ' | Hoteis';
        break;
      case '/carros':
        title += ' | Carros';
        break;
      case '/conta':
        title += ' | Conta';
        break;
      default:
        title += ' | DevTrip';
    }

    document.title = title;
  }, [location]);

  return null;
};

export default PageTitle;
