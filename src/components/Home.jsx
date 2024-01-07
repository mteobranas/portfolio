import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Home() {
  return (
    <div className="max-w-2xl mx-5 md:mx-20 md:h-[calc(100vh-88px)] flex flex-col pt-24 md:pt-0 md:justify-center gap-5">
      <h1 className="text-left text-6xl md:text-7xl">
        Hello, I&apos;m Mateo, a Frontend Developer.
      </h1>
      <p className="text-left text-3xl text-gray-500">
        I create user-friendly solutions that elevate human experiences.
      </p>
      <div className="flex gap-5">
        <a
          href="https://github.com/mteobranas"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="text-4xl md:text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/mateobranas/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="text-4xl md:text-2xl"
          />
        </a>
      </div>
    </div>
  )
}
