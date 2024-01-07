import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'

export function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 w-full bg-white z-50 opacity-90">
      <nav className="flex justify-between items-center mx-5 md:mx-20">
        <ul className="flex items-center py-8 gap-5 max-w-[1200px] font-onest">
          <li onClick={() => scrollToSection('home')}>
            <span className="hover:cursor-pointer">HOME</span>
          </li>
          <li onClick={() => scrollToSection('about')}>
            <span className="hover:cursor-pointer">ABOUT</span>
          </li>
          <li onClick={() => scrollToSection('projects')}>
            <span className="hover:cursor-pointer">PROJECTS</span>
          </li>
          <li onClick={() => scrollToSection('contact')}>
            <span className="hover:cursor-pointer">CONTACT</span>
          </li>
        </ul>

        <div className="flex gap-5">
          <FontAwesomeIcon
            icon={faSun}
            size="xl"
            className="hover:cursor-pointer"
          />
        </div>
      </nav>
    </header>
  )
}
