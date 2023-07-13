import { Flex, Box, Stack, Heading } from "@chakra-ui/react";
import EducationItem from "../components/EducationItem";
import WorkItem from "../components/WorkItem";
import { WorkItemProps } from "../interfaces/WorkItemProps";
import { EducationItemProps } from "../interfaces/EducationItemProps";

const WorkExperience: WorkItemProps[] = [
  {
    image: "../src/assets/img/work/capgemini.png",
    role: "Intelligent Automation Developer",
    company: "Capgemini",
    start: "june 2022",
    end: "today",
    location: "Guatemala City, Guatemala",
    description: "",
  },
  {
    image: "../src/assets/img/work/freelancing.png",
    role: "Freelancer (3D Art & Programming)",
    company: "Freelancing Platforms",
    start: "2017",
    end: "today",
    location: "Remote, Globally",
    description: "",
  },
  {
    image: "../src/assets/img/work/caminos.png",
    role: "Inventory Manager",
    company: "Caminos - Zona Vial 10",
    start: "october 2018",
    end: "december 2021",
    location: "San Benito, Peten, Guatemala",
    description: "",
  },
  {
    image: "../src/assets/img/work/calcos-yimi.png",
    role: "Graphic Design & Customer Service",
    company: "Calcos Yimi",
    start: "june 2017",
    end: "may 2018",
    location: "Santa Elena, Peten, Guatemala",
    description: "",
  },
];

const Internships: WorkItemProps[] = [
  {
    image: "../src/assets/img/work/tiny-bytes.png",
    role: "3D Artist",
    company: "Tiny Bytes SpA.",
    start: "november 2021",
    end: "april 2022",
    location: "Santiago de Chile, Chile (Remote)",
    description: "",
  },
];

const Education: EducationItemProps[] = [
  {
    image: "../src/assets/img/education/umg.png",
    grade: "Systems Engineering & Computer Science",
    schoolName: "Universidad Mariano Galvez de Guatemala",
    start: "2017",
    end: "2024 (expected)",
  },
  {
    image: "../src/assets/img/education/ling.png",
    grade: "High School Diploma in Science &  Arts",
    schoolName: "Liceo Integral Nueva Generacion",
    start: "2014",
    end: "2016",
  },
  {
    image: "../src/assets/img/education/hashamayim.png",
    grade: "High School Diploma in Science &  Arts (first year)",
    schoolName: "Liceo Cristiano El Hashamayim",
    start: "2013",
    end: "2013",
  },
  {
    image: "../src/assets/img/education/tziquinaja.png",
    grade: "Primary School Diploma",
    schoolName: "E.O.R.M. Barrio Tziquinaja",
    start: "2006",
    end: "2012",
  },
];

export default function Resume() {
  return (
    <Flex
      w={"full"}
      overflow={{ sm: "visible", md: "auto" }}
      maxH={{ base: "100vh", md: "100vh" }}
    >
      <Stack w={"full"}>
        <Box p={8}>
          <Heading fontSize={"4xl"} textAlign="left" mb={5}>
            Work Experience
          </Heading>
          {WorkExperience.map((work, index) => {
            return <WorkItem work={work} key={index} />;
          })}
        </Box>
        <Box p={8} pt={0}>
          <Heading fontSize={"4xl"} textAlign="left" mb={5}>
            Internships
          </Heading>
          {Internships.map((work, index) => {
            return <WorkItem work={work} key={index} />;
          })}
        </Box>
        <Box p={8} pt={0}>
          <Box w={"90%"}>
            <Heading fontSize={"4xl"} textAlign="left">
              Education
            </Heading>
          </Box>
          {Education.map((education, index) => {
            return <EducationItem education={education} key={index} />;
          })}
        </Box>
      </Stack>
    </Flex>
  );
}
