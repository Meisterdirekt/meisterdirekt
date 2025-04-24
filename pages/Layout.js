import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Unsere Dienstleistungen</Link>
            </li>
            <li>
              <Link href="/contact">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2025 MeisterDirekt. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
};

export default Layout;
