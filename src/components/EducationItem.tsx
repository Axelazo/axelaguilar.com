import {
  Box,
  Stack,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { EducationItemProps } from "../interfaces/EducationItemProps";

export default function EducationItem({
  education,
}: {
  education: EducationItemProps;
}) {
  const { image, grade, schoolName, start, end } = education;
  return (
    <>
      <Stack
        direction={["column", "row"]}
        w={"full"}
        mt={5}
        backgroundColor={useColorModeValue("#fcfcfd", "#211E2B")}
        py={5}
        px={5}
        rounded={"lg"}
      >
        <Image
          w={{ base: "3rem" }}
          h={{ base: "3rem" }}
          rounded={"lg"}
          border={"1px"}
          borderColor={"grey"}
          src={image}
        ></Image>
        <Box pl={2}>
          <Heading fontSize={"xl"}>{grade}</Heading>
          <Text fontWeight={"100"} color={"#a1a1a1"}>
            {`${schoolName} • ${start} - ${end}`}
          </Text>
        </Box>
      </Stack>
    </>
  );
}
