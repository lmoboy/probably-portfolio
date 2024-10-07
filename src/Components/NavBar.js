import { useRef, useEffect } from 'react';

export default function NavBar() {
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const links = nav.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start'});
      });
    });
  }, []);

  return (
    <nav ref={navRef} className={`w-full h-6 sticky top-0 left-0 p-4 gap-10 flex justify-center items-center bg-black text-white`}>
      <a href='#home' className="text-white hover:underline">Home</a>
      <a href='#about' className="text-white hover:underline">About</a>
      <a href='#contact' className="text-white hover:underline">Contact</a>
    </nav>
  );
}
