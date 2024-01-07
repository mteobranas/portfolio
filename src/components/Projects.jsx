import { SimpleGrid } from '@chakra-ui/react'
import { CardComponent } from './Card'
import projects from '../data/projects'

export function Projects() {
  return (
    <div className="flex flex-col mx-5 md:mx-20 text-left pt-16 md:pt-0 text-lg gap-5 font-onest">
      <div className="flex items-center gap-5">
        <h1 className="text-6xl">Projects</h1>
        <p className="text-xl text-gray-500">― the most recent ones.</p>
      </div>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
      >
        {projects.map((project, index) => (
          <CardComponent
            key={index}
            title={project.title}
            desc={project.desc}
            img={project.img}
            tags={project.tags}
          />
        ))}
      </SimpleGrid>
    </div>
  )
}
