import { Terminal } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Lab' },
    { id: 'experiments', label: 'Experiments' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'resources', label: 'Resources' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header id="main-header">
      <div className="nav-container">
        <a 
          href="#home" 
          className="logo-link" 
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('home');
          }}
          id="logo-anchor"
        >
          <div className="logo-badge" id="logo-icon-container">
            <Terminal size={22} id="logo-svg-icon" />
          </div>
          <div className="logo-text">
            <h1>DSA LAB</h1>
            <p>Data Structures & Algorithms</p>
          </div>
        </a>

        <nav id="main-navigation">
          <ul id="nav-list">
            {navItems.map((item) => (
              <li 
                key={item.id} 
                className={currentPage === item.id ? 'active' : ''}
                id={`nav-item-${item.id}`}
              >
                <a 
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(item.id);
                  }}
                  id={`nav-link-${item.id}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
