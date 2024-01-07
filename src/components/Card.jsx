import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Badge,
} from '@chakra-ui/react'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function CardComponent({ title, desc, img, tags }) {
  return (
    <Card maxW="sm" variant="outline">
      <CardBody>
        <Image src={img} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md" className="flex justify-between">
            {title} <FontAwesomeIcon icon={faArrowRightLong} />
          </Heading>
          <Text fontSize="sm">{desc}</Text>
        </Stack>
      </CardBody>
      <CardFooter className="flex gap-4">
        {tags.map((tag, index) => (
          <Badge key={index}>{tag}</Badge>
        ))}
      </CardFooter>
    </Card>
  )
}
