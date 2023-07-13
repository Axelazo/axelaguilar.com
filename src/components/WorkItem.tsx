import {
  Box,
  Stack,
  Heading,
  Image,
  Text,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { WorkItemProps } from "../interfaces/WorkItemProps";

export default function WorkItem({ work }: { work: WorkItemProps }) {
  const { image, role, company, start, end, location } = work;
  return (
    <Box
      mb={6}
      backgroundColor={useColorModeValue("#fcfcfd", "#211E2B")}
      py={3}
      px={4}
      rounded={"lg"}
    >
      <Stack direction={["column", "row"]} p={2} w={"full"} mt={2}>
        <Image
          src={image}
          w={{ base: "3rem" }}
          h={{ base: "3rem" }}
          rounded={"lg"}
          border={"1px"}
          borderColor={"grey"}
        ></Image>
        <Box pl={2} w={"full"}>
          <HStack>
            <Box w={"full"}>
              <Heading fontSize={"xl"}>{role}</Heading>
            </Box>
            <Box>
              <Text whiteSpace={"nowrap"}>{`from ${start} to ${end}`}</Text>
            </Box>
          </HStack>

          <Text fontWeight={"light"} color={"#a1a1a1"}>
            {`${company}, ${location}`}
          </Text>
        </Box>
      </Stack>
      <Box p={2} fontSize={"md"} px={10}></Box>
    </Box>
  );
}
