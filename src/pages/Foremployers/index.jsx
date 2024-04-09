import React from "react";
import { Helmet } from "react-helmet";
import { Slider } from "../../components";
import {
  Button,
  Text,
  Heading,
  Flex,
  Image,
  AccordionButton,
  Accordion,
  AccordionItem,
  Box,
  Square,
  Link,
  AbsoluteCenter,
  SimpleGrid,
  Container,
  IconButton,
} from "@chakra-ui/react";

export default function ForemployersPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Task 1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box pb={{ md: "1235px", base: "20px" }} bg="white.A700" w="100%">
        <Flex flexDirection="column" alignItems="center">
          <Flex pb="10px" bg="gray.100" alignSelf="stretch" flexDirection="column" alignItems="end">
            <Flex
              alignSelf="stretch"
              justifyContent="space-between"
              alignItems="center"
              gap="20px"
              p={{ base: "20px", sm: "34px" }}
              flexDirection={{ md: "row", base: "column" }}
              as="header"
            >
              <Flex
                ml={{ md: "86px", base: "0px" }}
                w={{ md: "65%", base: "100%" }}
                justifyContent="space-between"
                alignItems="center"
                gap="20px"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Flex
                  pr="6px"
                  borderTopRightRadius="5px"
                  gap="4px"
                  bg="deep_purple.600"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Heading
                    size="lg"
                    color="white.A700_01"
                    pl="7px"
                    letterSpacing="-0.71px"
                    fontFamily="Outfit"
                    fontSize="35.5px"
                    borderColor="deep_purple.600"
                    borderWidth="1px"
                    borderStyle="solid"
                    borderRadius="5px"
                  >
                    <Heading size="lg" as="span" color="deep_purple.600">
                      r
                    </Heading>
                    <Heading size="lg" as="span" color="deep_purple.600" letterSpacing="2.84px">
                      e
                    </Heading>
                    <Heading size="lg" as="span" color="white.A700_01" fontFamily="Actor" fontWeight={400}>
                      work
                    </Heading>
                  </Heading>
                  <Text
                    size="xs"
                    color="white.A700_01"
                    mb="4px"
                    fontFamily="Gilroy-Regular"
                    fontSize="11.43px"
                    alignSelf="end"
                  >
                    ai
                  </Text>
                </Flex>
                <Flex
                  flex={1}
                  justifyContent="space-between"
                  alignItems="center"
                  gap="20px"
                  flexDirection={{ base: "column", sm: "row" }}
                  alignSelf="stretch"
                >
                  <Link href="#" alignSelf="start">
                    <Text color="blue_gray.400" textAlign="center">
                      Talent Finder
                    </Text>
                  </Link>
                  <Link href="#" alignSelf="start">
                    <Text color="blue_gray.400" textAlign="center">
                      For Recruiters
                    </Text>
                  </Link>
                  <Flex flexDirection="column" alignItems="center">
                    <Heading size="xs" as="h6" textAlign="center">
                      For Employers
                    </Heading>
                    <Image src="images/img_vector_451.png" h="1px" />
                  </Flex>
                  <Link href="#" alignSelf="start">
                    <Text color="blue_gray.400" textAlign="center">
                      About Us
                    </Text>
                  </Link>
                  <Link href="Company" target="_blank" rel="noreferrer">
                    <Text color="blue_gray.400" textAlign="center">
                      Company
                    </Text>
                  </Link>
                </Flex>
              </Flex>
              <Flex mr={{ md: "86px", base: "0px" }} gap="17px">
                <Button
                  size="sm"
                  fontWeight={500}
                  borderColor="deep_purple.600"
                  borderWidth="2px"
                  borderStyle="solid"
                  minW="129px"
                  borderRadius="10px"
                  px={{ base: "20px", sm: "" }}
                >
                  Log In
                </Button>
                <Button
                  size="sm"
                  color="white.A700_01"
                  fontWeight={500}
                  minW="152px"
                  borderRadius="10px"
                  px={{ base: "20px", sm: "" }}
                >
                  Get Started
                </Button>
              </Flex>
            </Flex>
            <Box h={{ md: "596px", base: "auto" }} w="92%" position="relative">
              <Flex w="100%" justifyContent="center" alignItems="start" flexDirection={{ md: "row", base: "column" }}>
                <Flex
                  mt="70px"
                  gap="4px"
                  zIndex={1}
                  w={{ md: "48%", base: "100%" }}
                  position="relative"
                  flexDirection="column"
                  p={{ md: "", base: "20px" }}
                >
                  <Heading size="4xl" as="h1" fontFamily="Montserrat" fontSize="60px">
                    <Heading
                      size="4xl"
                      as="span"
                      color="deep_purple.600"
                      fontFamily="Garnett Semibold"
                      fontSize="54px"
                      fontWeight={600}
                    >
                      Power Up Your&nbsp;
                    </Heading>
                    <Heading
                      size="4xl"
                      as="span"
                      color="deep_purple.600"
                      fontFamily="Garnett Semibold"
                      fontSize="54px"
                      fontWeight={600}
                    >
                      <>
                        Hiring
                        <br />
                      </>
                    </Heading>
                    <Heading
                      size="4xl"
                      as="span"
                      color="deep_purple.600"
                      fontFamily="Garnett Regular"
                      fontSize="48px"
                      fontWeight={400}
                    >
                      with Rework .
                    </Heading>
                  </Heading>
                  <Text size="s" color="gray.900" lineHeight="22px">
                    Empower your business with cutting-edge A.I. technology, simplified processes, and top-tier talent
                    connections. Rework is your strategic partner in redefining how you hire{" "}
                  </Text>
                </Flex>
                <Box
                  h="596px"
                  ml={{ md: "-109px", base: "0px" }}
                  position="relative"
                  flex={{ md: 1, base: "unset" }}
                  w={{ md: "auto", base: "100%" }}
                  p={{ md: "", base: "20px" }}
                  alignSelf="stretch"
                >
                  <Flex
                    w="79%"
                    justifyContent="center"
                    alignItems="center"
                    position={{ base: "relative", sm: "absolute" }}
                    right="0.00px"
                    bottom="0px"
                    top="0px"
                    h="max-content"
                    my="auto"
                    flexDirection={{ base: "column", sm: "row" }}
                  >
                    <Flex
                      mb="28px"
                      gap="15px"
                      zIndex={1}
                      alignSelf="end"
                      bg="deep_purple.600"
                      w={{ base: "100%", sm: "28%" }}
                      position="relative"
                      justifyContent="center"
                      alignItems="start"
                      p="14px"
                      borderRadius="5px"
                    >
                      <IconButton
                        size="lg"
                        colorScheme="deep_purple_50"
                        icon={<Image src="images/img_search.svg" />}
                        aria-label="1_25_868_601_64_64-search_one"
                        w="64px"
                        borderRadius="5px"
                      />
                      <Heading size="md" color="deep_purple.50" mt="6px" fontSize="24.94px" fontWeight={600} w="63%">
                        <Heading size="md" as="span" color="deep_purple.50" fontFamily="Space Grotesk" fontWeight={700}>
                          <>
                            +360
                            <br />
                          </>
                        </Heading>
                        <Heading
                          size="md"
                          as="span"
                          color="deep_purple.50"
                          fontFamily="Garnett Light"
                          fontSize="12.31px"
                          fontWeight={300}
                        >
                          Happy Companies
                        </Heading>
                      </Heading>
                    </Flex>
                    <Image
                      src="images/img_ellipse_6033.png"
                      h="596px"
                      ml={{ base: "0px", sm: "-201px" }}
                      position="relative"
                      flex={1}
                      w={{ base: "100%", sm: "auto" }}
                      alignSelf="stretch"
                    />
                  </Flex>
                  <Image
                    src="images/img_mask_group.png"
                    h="555px"
                    w="100%"
                    position="absolute"
                    top="0.00px"
                    right="0px"
                    left="0px"
                    m="auto"
                  />
                </Box>
              </Flex>
              <Flex
                w="21%"
                flexDirection="column"
                alignItems="start"
                position="absolute"
                bottom="20%"
                left="0.00px"
                m="auto"
              >
                <Button size="xl" color="gray.100" w="100%" borderRadius="20px" px={{ base: "20px", sm: "" }}>
                  Book A Demo
                </Button>
                <Flex mt="27px" gap="10px" alignItems="center">
                  <Image src="images/img_checkmark.svg" h="20px" w="20px" />
                  <Text size="s" color="deep_purple.600" mb="5px" alignSelf="end">
                    No credit Required
                  </Text>
                </Flex>
                <Flex gap="10px" alignItems="center" py="7px">
                  <Image src="images/img_checkmark.svg" h="20px" w="20px" />
                  <Text size="s" color="deep_purple.600" alignSelf="start">
                    Streamlined Recruitment Process
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
          <Box bg="deep_purple.50" boxShadow="xs" alignSelf="stretch" py={{ md: "50px", base: "20px" }}>
            <Flex gap="28px" overflow="auto" flexDirection="column" alignItems="center">
              <Text size="xl" color="deep_purple.200" textAlign="center">
                Hire for 1000+ Brands Including
              </Text>
              <Container
                w="100%"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                maxW="1714px"
                gap="20px"
                px="0px"
                mx="auto"
                flexDirection={{ md: "row", base: "column" }}
                p={{ md: "", base: "20px" }}
              >
                <Image src="images/img_microsoft_1.svg" h="26px" w={{ md: "8%", base: "100%" }} />
                <Image src="images/img_google_2015_1.svg" h="31px" w={{ md: "6%", base: "100%" }} />
                <Image src="images/img_kisspng_amazon.png" h="38px" w={{ md: "6%", base: "100%" }} />
                <Image src="images/img_kisspng_nokia_n.png" h="26px" w={{ md: "8%", base: "100%" }} />
                <Image src="images/img_vector.svg" h="42px" w={{ md: "8%", base: "100%" }} />
                <Image src="images/img_microsoft_1.svg" h="26px" w={{ md: "8%", base: "100%" }} />
                <Image src="images/img_google_2015_1.svg" h="31px" w={{ md: "6%", base: "100%" }} />
                <Image src="images/img_kisspng_amazon.png" h="38px" w={{ md: "6%", base: "100%" }} />
                <Image src="images/img_kisspng_nokia_n.png" h="26px" w={{ md: "8%", base: "100%" }} />
              </Container>
            </Flex>
          </Box>
          <Heading mt="99px" textTransform="capitalize" textAlign="center" fontSize="42px">
            <Heading as="span" color="deep_purple.600">
              Our Amazing Benefits&nbsp;
            </Heading>
            <Heading as="span" color="deep_purple.600" fontFamily="Garnett Regular" fontWeight={400}>
              Helpful For Your Hiring
            </Heading>
          </Heading>
          <SimpleGrid
            mt="85px"
            w="100%"
            gap="84px"
            justifyContent="center"
            maxW="1200px"
            mx="auto"
            p={{ md: "", base: "20px" }}
            sx={{ "grid-template-columns": "repeat(auto-fill, minmax(343px , 1fr))" }}
          >
            <Flex gap="18px" w="100%" flexDirection="column">
              <Image src="images/img_eos_icons_ai.svg" h="50px" w="50px" />
              <Heading size="md" fontFamily="Libre Franklin" fontSize="24px">
                <Heading size="md" as="span" color="deep_purple.600" fontFamily="Garnett Semibold" fontWeight={600}>
                  <>
                    60%
                    <br />
                  </>
                </Heading>
                <Heading size="md" as="span" color="deep_purple.600" fontFamily="Garnett Regular" fontWeight={400}>
                  Cost Reduce
                </Heading>
              </Heading>
              <Text color="gray.900_03" lineHeight="28px">
                Zero overhead in the hiring process - promise! Source top quality candidates for some of the best
                companies
              </Text>
            </Flex>
            <Flex gap="17px" w="100%" flexDirection="column">
              <Image src="images/img_eos_icons_ai_deep_purple_600.svg" h="50px" w="50px" />
              <Heading size="md" as="h3" fontSize="24px" fontWeight={600}>
                <Heading size="md" as="span" color="deep_purple.600">
                  <>
                    50% Faster
                    <br />
                  </>
                </Heading>
                <Heading size="md" as="span" color="deep_purple.600" fontFamily="Garnett Regular" fontWeight={400}>
                  Recruitment by TAT
                </Heading>
              </Heading>
              <Text color="gray.900_03" lineHeight="28px">
                Zero overhead in the hiring process - promise! Source top quality candidates for some of the best
                companies
              </Text>
            </Flex>
            <Flex gap="18px" w="100%" flexDirection="column">
              <Image src="images/img_mdi_user_card_details_outline.svg" h="50px" w="50px" />
              <Heading size="md" as="h4" fontFamily="Libre Franklin" fontSize="24px">
                <Heading size="md" as="span" color="deep_purple.600" fontFamily="Garnett Semibold" fontWeight={600}>
                  <>
                    Highly Contextualized <br />
                  </>
                </Heading>
                <Heading size="md" as="span" color="deep_purple.600" fontFamily="Garnett Regular" fontWeight={400}>
                  Interview
                </Heading>
              </Heading>
              <Text color="gray.900_03" lineHeight="28px">
                Al models generate highly contextualized interviews for the candidates based on your Company profile,
                Job description and Candidate&#39;s CV.
              </Text>
            </Flex>
            <Flex gap="18px" w="100%" flexDirection="column">
              <Image src="images/img_healthicons_i_s.svg" h="48px" w="48px" />
              <Heading size="md" as="h5" fontFamily="Libre Franklin" fontSize="24px">
                <Heading size="md" as="span" color="deep_purple.600" fontFamily="Garnett Semibold" fontWeight={600}>
                  <>
                    Automated <br />
                  </>
                </Heading>
                <Heading size="md" as="span" color="deep_purple.600" fontFamily="Garnett Regular" fontWeight={400}>
                  Scheduling
                </Heading>
              </Heading>
              <Text color="gray.900_03" lineHeight="28px">
                Email & WhatsApp based communication for interview scheduling with automated reminders.
              </Text>
            </Flex>
            <Flex gap="18px" w="100%" flexDirection="column">
              <Image src="images/img_eos_icons_ai_deep_purple_200.svg" h="50px" w="50px" />
              <Heading size="md" as="h6" fontFamily="Libre Franklin" fontSize="24px">
                <Heading size="md" as="span" color="deep_purple.600" fontFamily="Garnett Semibold" fontWeight={600}>
                  <>
                    AI generated Interviews
                    <br />
                  </>
                </Heading>
                <Heading size="md" as="span" color="deep_purple.600" fontFamily="Garnett Regular" fontWeight={400}>
                  On what matters
                </Heading>
              </Heading>
              <Text color="gray.900_03" lineHeight="28px">
                0 manual interventions, completely seamless experience for the candidates.
              </Text>
            </Flex>
            <Flex gap="18px" w="100%" flexDirection="column">
              <Image src="images/img_fluent_tasks_app_20_regular.svg" h="50px" w="50px" />
              <Heading size="md" as="h4" fontFamily="Libre Franklin" fontSize="24px">
                <Heading size="md" as="span" color="deep_purple.600" fontFamily="Garnett Semibold" fontWeight={600}>
                  <>
                    in-built
                    <br />
                  </>
                </Heading>
                <Heading size="md" as="span" color="deep_purple.600" fontFamily="Garnett Regular" fontWeight={400}>
                  ATS
                </Heading>
              </Heading>
              <Text color="gray.900_03" lineHeight="28px">
                To manage all of your candidates & Credo verified CVs. Integrations with other ATS coming soon.
              </Text>
            </Flex>
          </SimpleGrid>
          <Box h={{ md: "784px", base: "auto" }} mt="155px" alignSelf="stretch" position="relative">
            <Image src="images/img_eye.svg" h="25px" mt="105px" ml={{ md: "505px", base: "0px" }} w="25px" />
            <AbsoluteCenter
              gap={{ md: "99px", base: "49px", sm: "74px" }}
              bg="gray.100"
              w="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              h="max-content"
              px="56px"
              py="95px"
              m="auto"
              p={{ md: "", base: "20px" }}
            >
              <Heading size="xl" textTransform="capitalize" textAlign="center" fontSize="38px">
                <Heading size="xl" as="span" color="deep_purple.600">
                  How Our System&nbsp;
                </Heading>
                <Heading size="xl" as="span" color="deep_purple.600" fontFamily="Garnett Regular" fontWeight={400}>
                  Operates
                </Heading>
              </Heading>
              <Flex gap="1px" w="100%" maxW="1198px" borderRadius="8px" flexDirection={{ md: "row", base: "column" }}>
                <Flex gap="38px" bg="white.A700_01" w="100%" flexDirection="column" alignItems="center">
                  <Flex alignSelf="stretch" justifyContent="space-between" alignItems="center" gap="20px">
                    <Heading size="s" as="h3" color="black.900" mb="20px" alignSelf="end">
                      Upload Documents
                    </Heading>
                    <Image src="images/img_twitter.svg" h="84px" borderBottomLeftRadius="10px" w="84px" />
                  </Flex>
                  <Flex mb="59px" pb="19px" w={{ md: "85%", base: "100%" }} p={{ md: "", base: "20px" }}>
                    <Text size="lg">
                      Shortlist the most qualified candidate and upload their details for the top companies
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  pt={{ base: "20px", sm: "29px" }}
                  pl={{ base: "20px", sm: "29px" }}
                  gap={{ base: "30px", sm: "61px" }}
                  bg="deep_purple.50"
                  w="100%"
                  flexDirection="column"
                  alignItems="start"
                >
                  <Link href="#">
                    <Heading size="s" as="h4" color="gray.900">
                      Sign Up
                    </Heading>
                  </Link>
                  <Box h="160px" alignSelf="stretch" position="relative">
                    <Text size="lg" w="92%" position="absolute" left="0.00px" top="0.00px" m="auto">
                      Follow the link below to sign up and get access of the current job postings
                    </Text>
                    <Box
                      borderTopLeftRadius="10px"
                      bg="deep_purple.600"
                      boxShadow="4xl"
                      w="23%"
                      position="absolute"
                      bottom="0.00px"
                      right="0.33px"
                      p="7px"
                      m="auto"
                    >
                      <Image src="images/img_bag.svg" h={{ md: "60px", base: "auto" }} w="100%" my="4px" />
                    </Box>
                  </Box>
                </Flex>
                <Flex
                  pb={{ base: "20px", sm: "30px" }}
                  pl={{ base: "20px", sm: "30px" }}
                  gap="38px"
                  bg="white.A700_01"
                  w="100%"
                  flexDirection="column"
                >
                  <Flex justifyContent="space-between" alignItems="center" gap="20px">
                    <Heading size="s" as="h5" color="black.900">
                      Get Rewards
                    </Heading>
                    <Box borderBottomLeftRadius="10px" bg="deep_purple.600" boxShadow="5xl" w="23%" p="11px">
                      <Image src="images/img_ticket.svg" h="61px" w="61px" borderRadius="1px" />
                    </Box>
                  </Flex>
                  <Box mb="30px" pb={{ md: "46px", base: "20px" }}>
                    <Text size="lg">As soon as the candidate gets selected you get your benefits</Text>
                  </Box>
                </Flex>
              </Flex>
              <Button
                colorScheme="gray_100"
                fontWeight={500}
                borderColor="deep_purple.600"
                borderWidth="2px"
                borderStyle="solid"
                minW="164px"
                borderRadius="10px"
                px={{ base: "20px", sm: "" }}
              >
                Get Started
              </Button>
            </AbsoluteCenter>
          </Box>
          <Flex
            gap={{ md: "74px", base: "37px", sm: "55px" }}
            bg="white.A700"
            alignSelf="stretch"
            flexDirection="column"
            alignItems="center"
            p={{ md: "56px", base: "20px" }}
          >
            <Heading mt="9px" textTransform="capitalize" fontSize="42px">
              <Heading as="span" color="deep_purple.600">
                Choose Your Simple,&nbsp;
              </Heading>
              <Heading as="span" color="deep_purple.600" fontFamily="Garnett Regular" fontWeight={400}>
                Transparent Pricing
              </Heading>
            </Heading>
            <Flex gap="49px" w="100%" maxW="1197px" mx="auto" flexDirection={{ md: "row", base: "column" }}>
              <Flex
                bg="gray.100"
                boxShadow="lg"
                w="100%"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={{ base: "20px", sm: "30px" }}
                borderRadius="10px"
              >
                <Flex mt="3px" gap="6px" alignItems="center" flexWrap="wrap">
                  <Text
                    size="2xl"
                    color="deep_purple.600"
                    fontFamily="Space Grotesk"
                    textAlign="center"
                    fontSize="23px"
                  >
                    1
                  </Text>
                  <Text
                    size="2xl"
                    color="deep_purple.600"
                    fontFamily="Garnett Medium"
                    textAlign="center"
                    fontSize="23px"
                  >
                    Month
                  </Text>
                </Flex>
                <Flex mt="15px" alignItems="center" flexWrap="wrap">
                  <Text size="5xl" color="gray.900_02" fontFamily="Space Grotesk" textAlign="center" fontSize="40px">
                    ₹
                  </Text>
                  <Text size="5xl" color="gray.900_02" fontFamily="Garnett Medium" textAlign="center" fontSize="40px">
                    199.00
                  </Text>
                  <Text
                    color="gray.900_02"
                    mb="5px"
                    fontFamily="Garnett Medium"
                    textAlign="center"
                    fontWeight={500}
                    alignSelf="end"
                  >
                    /month
                  </Text>
                </Flex>
                <Flex mt="46px" gap="20px" alignSelf="stretch" flexDirection="column">
                  <Text
                    size="lg"
                    color="deep_purple.600"
                    fontFamily="Garnett Medium"
                    textAlign="center"
                    fontWeight={500}
                    lineHeight="28px"
                  >
                    Suitable for companies with 5-10 openings
                  </Text>
                  <Flex gap="8px" flexDirection="column">
                    <Flex pr="19px" gap="10px">
                      <Image src="images/img_checkmark_green_500.svg" h="24px" alignSelf="start" w="24px" />
                      <Text alignSelf="end">10 interview-ready candidates</Text>
                    </Flex>
                    <Flex gap="10px" alignSelf="start">
                      <Image src="images/img_checkmark_green_500.svg" h="24px" alignSelf="start" w="24px" />
                      <Text alignSelf="end">Unlimited job postings</Text>
                    </Flex>
                    <Flex gap="10px" alignItems="start">
                      <Image src="images/img_checkmark_green_500.svg" h="24px" w="24px" />
                      <Text w="92%">Receive pre-vetted profiles within 48 hours</Text>
                    </Flex>
                    <Flex pr={{ base: "20px", sm: "27px" }} gap="10px">
                      <Image src="images/img_icons.svg" h="24px" alignSelf="start" w="24px" />
                      <Text alignSelf="end">Dedicated account manager</Text>
                    </Flex>
                    <Flex gap="10px" alignItems="start">
                      <Image src="images/img_icons.svg" h="24px" w="24px" />
                      <Text w="92%">Assistance with interview scheduling</Text>
                    </Flex>
                    <Flex gap="10px" alignSelf="start">
                      <Image src="images/img_icons.svg" h="24px" alignSelf="start" w="24px" />
                      <Text alignSelf="end">Custom reports</Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Button
                  color="white.A700_01"
                  mt="62px"
                  boxShadow="xl"
                  w="100%"
                  borderRadius="10px"
                  px={{ base: "20px", sm: "" }}
                >
                  Get Started
                </Button>
              </Flex>
              <Flex
                pb={{ base: "20px", sm: "30px" }}
                pl={{ base: "20px", sm: "30px" }}
                bg="deep_purple.600"
                boxShadow="lg"
                w="100%"
                flexDirection="column"
                alignItems="start"
                borderRadius="10px"
              >
                <Button
                  size="xs"
                  colorScheme="orange_300"
                  borderBottomLeftRadius="5px"
                  fontFamily="Garnett Medium"
                  fontWeight={500}
                  zIndex={1}
                  alignSelf="end"
                  minW="131px"
                >
                  Most Popular
                </Button>
                <Flex
                  mt="-2px"
                  ml={{ md: "98px", base: "0px" }}
                  gap="6px"
                  position="relative"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Text size="2xl" color="gray.100" fontFamily="Space Grotesk" textAlign="center" fontSize="23px">
                    3
                  </Text>
                  <Text size="2xl" color="gray.100" fontFamily="Garnett Medium" textAlign="center" fontSize="23px">
                    Months
                  </Text>
                </Flex>
                <Flex mt="15px" ml={{ md: "40px", base: "0px" }} alignItems="center" flexWrap="wrap">
                  <Text size="5xl" color="gray.100" fontFamily="Space Grotesk" textAlign="center" fontSize="40px">
                    ₹
                  </Text>
                  <Text size="5xl" color="gray.100" fontFamily="Garnett Medium" textAlign="center" fontSize="40px">
                    149.00
                  </Text>
                  <Text
                    color="gray.100"
                    mb="5px"
                    fontFamily="Garnett Medium"
                    textAlign="center"
                    fontWeight={500}
                    alignSelf="end"
                  >
                    /month
                  </Text>
                </Flex>
                <Flex
                  mt="46px"
                  ml={{ md: "5px", base: "0px" }}
                  gap="20px"
                  w={{ md: "89%", base: "100%" }}
                  flexDirection="column"
                >
                  <Text
                    size="lg"
                    color="gray.100"
                    fontFamily="Garnett Medium"
                    textAlign="center"
                    fontWeight={500}
                    lineHeight="28px"
                  >
                    Suitable for companies with 5-10 openings
                  </Text>
                  <Flex gap="8px" flexDirection="column">
                    <Flex pr="19px" gap="10px">
                      <Image src="images/img_checkmark_green_500.svg" h="24px" alignSelf="start" w="24px" />
                      <Text color="deep_purple.50" alignSelf="end">
                        10 interview-ready candidates
                      </Text>
                    </Flex>
                    <Flex gap="10px" alignSelf="start">
                      <Image src="images/img_checkmark_green_500.svg" h="24px" alignSelf="start" w="24px" />
                      <Text color="deep_purple.50" alignSelf="end">
                        Unlimited job postings
                      </Text>
                    </Flex>
                    <Flex gap="10px" alignItems="start">
                      <Image src="images/img_checkmark_green_500.svg" h="24px" w="24px" />
                      <Text color="deep_purple.50" w="92%">
                        Receive pre-vetted profiles within 48 hours
                      </Text>
                    </Flex>
                    <Flex pr={{ base: "20px", sm: "27px" }} gap="10px">
                      <Image src="images/img_icons.svg" h="24px" alignSelf="start" w="24px" />
                      <Text color="deep_purple.50" alignSelf="end">
                        Dedicated account manager
                      </Text>
                    </Flex>
                    <Flex gap="10px" alignItems="start">
                      <Image src="images/img_icons.svg" h="24px" w="24px" />
                      <Text color="deep_purple.50" w="92%">
                        Assistance with interview scheduling
                      </Text>
                    </Flex>
                    <Flex gap="10px" alignSelf="start">
                      <Image src="images/img_icons.svg" h="24px" alignSelf="start" w="24px" />
                      <Text color="deep_purple.50" alignSelf="end">
                        Custom reports
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Button
                  colorScheme="gray_100"
                  mt="62px"
                  ml={{ md: "5px", base: "0px" }}
                  fontWeight={500}
                  boxShadow="xl"
                  minW="296px"
                  borderRadius="10px"
                  px={{ base: "20px", sm: "" }}
                >
                  Get Started
                </Button>
              </Flex>
              <Flex
                bg="gray.100"
                boxShadow="lg"
                w="100%"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={{ base: "20px", sm: "30px" }}
                borderRadius="10px"
              >
                <Flex mt="3px" gap="6px" alignItems="center" flexWrap="wrap">
                  <Text
                    size="2xl"
                    color="deep_purple.600"
                    fontFamily="Space Grotesk"
                    textAlign="center"
                    fontSize="23px"
                  >
                    6
                  </Text>
                  <Text
                    size="2xl"
                    color="deep_purple.600"
                    fontFamily="Garnett Medium"
                    textAlign="center"
                    fontSize="23px"
                  >
                    Months
                  </Text>
                </Flex>
                <Flex mt="15px" alignItems="center" flexWrap="wrap">
                  <Text size="5xl" color="gray.900_02" fontFamily="Space Grotesk" textAlign="center" fontSize="40px">
                    ₹
                  </Text>
                  <Text size="5xl" color="gray.900_02" fontFamily="Garnett Medium" textAlign="center" fontSize="40px">
                    169.00
                  </Text>
                  <Text
                    color="gray.900_02"
                    mb="5px"
                    fontFamily="Garnett Medium"
                    textAlign="center"
                    fontWeight={500}
                    alignSelf="end"
                  >
                    /month
                  </Text>
                </Flex>
                <Flex mt="46px" gap="20px" alignSelf="stretch" flexDirection="column">
                  <Text
                    size="lg"
                    color="deep_purple.600"
                    fontFamily="Garnett Medium"
                    textAlign="center"
                    fontWeight={500}
                    lineHeight="28px"
                  >
                    Suitable for companies with 5-10 openings
                  </Text>
                  <Flex gap="8px" flexDirection="column">
                    <Flex pr="19px" gap="10px">
                      <Image src="images/img_checkmark_green_500.svg" h="24px" alignSelf="start" w="24px" />
                      <Text alignSelf="end">10 interview-ready candidates</Text>
                    </Flex>
                    <Flex gap="10px" alignSelf="start">
                      <Image src="images/img_checkmark_green_500.svg" h="24px" alignSelf="start" w="24px" />
                      <Text alignSelf="end">Unlimited job postings</Text>
                    </Flex>
                    <Flex gap="10px" alignItems="start">
                      <Image src="images/img_checkmark_green_500.svg" h="24px" w="24px" />
                      <Text w="92%">Receive pre-vetted profiles within 48 hours</Text>
                    </Flex>
                    <Flex pr={{ base: "20px", sm: "27px" }} gap="10px">
                      <Image src="images/img_icons.svg" h="24px" alignSelf="start" w="24px" />
                      <Text alignSelf="end">Dedicated account manager</Text>
                    </Flex>
                    <Flex gap="10px" alignItems="start">
                      <Image src="images/img_icons.svg" h="24px" w="24px" />
                      <Text w="92%">Assistance with interview scheduling</Text>
                    </Flex>
                    <Flex gap="10px" alignSelf="start">
                      <Image src="images/img_icons.svg" h="24px" alignSelf="start" w="24px" />
                      <Text alignSelf="end">Custom reports</Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Button
                  color="white.A700_01"
                  mt="62px"
                  boxShadow="xl"
                  w="100%"
                  borderRadius="10px"
                  px={{ base: "20px", sm: "" }}
                >
                  Get Started
                </Button>
              </Flex>
            </Flex>
            <Button
              colorScheme="gray_100"
              borderColor="deep_purple.600"
              borderWidth="2px"
              borderStyle="solid"
              minW="180px"
              borderRadius="10px"
              px={{ base: "20px", sm: "" }}
            >
              Book a Demo
            </Button>
          </Flex>
          <Flex
            gap="40px"
            bg="gray.100"
            alignSelf="stretch"
            justifyContent="center"
            alignItems="start"
            px="56px"
            py="81px"
            flexDirection={{ md: "row", base: "column" }}
            p={{ md: "", base: "20px" }}
          >
            <Flex flex={1} flexDirection="column" alignItems="start" alignSelf="stretch">
              <Heading fontSize="42px">
                <Heading as="span" color="deep_purple.600">
                  Discover the Future of&nbsp;
                </Heading>
                <Heading as="span" color="deep_purple.600" fontFamily="Garnett Regular" fontWeight={400}>
                  Talent Assessment!
                </Heading>
              </Heading>
              <Text size="lg" color="gray.900_02" mt="30px">
                <>
                  Facing challenges in traditional hiring?
                  <br />
                  Uncover the costs, pitfalls, and the game-changing role of Generative AI in recruitment.
                </>
              </Text>
              <Text size="lg" color="gray.900_02" mt="30px">
                <>
                  🔍 Inside this Whitepaper:
                  <br />
                  Manual vs. Machine-based hiring: Costs & Challenges.
                  <br />
                  The truth about &quot;Interview as a Service.&quot;
                  <br />
                  Generative AI: The simple explanation. Optimize Your Hiring Process Today!
                </>
              </Text>
              <Button
                size="xl"
                mt="94px"
                fontWeight={500}
                minW="591px"
                borderRadius="20px"
                px={{ base: "20px", sm: "" }}
              >
                Download Now for Smarter Recruitment
              </Button>
            </Flex>
            <Image
              src="images/img_rectangle_39394.png"
              h="563px"
              mb="29px"
              w={{ md: "32%", base: "100%" }}
              borderRadius="12px"
            />
          </Flex>
          <Flex
            pl="66px"
            pr="56px"
            bg="white.A700"
            alignSelf="stretch"
            flexDirection="column"
            alignItems="start"
            py="66px"
            p={{ md: "", base: "20px" }}
          >
            <Heading ml={{ md: "53px", base: "0px" }} fontSize="42px">
              <Heading as="span" color="deep_purple.600">
                Customer
              </Heading>
              <Heading as="span" color="deep_purple.600">
                &nbsp;
              </Heading>
              <Heading as="span" color="gray.900_01" fontFamily="Garnett Regular" fontWeight={400}>
                Testimonials
              </Heading>
            </Heading>
            <Text size="lg" color="gray.900_01" mt="5px" ml={{ md: "53px", base: "0px" }}>
              What others has say About Us
            </Text>
            <Flex
              mt="83px"
              mb="146px"
              gap="24px"
              alignSelf="center"
              w="100%"
              maxW="1198px"
              mx="auto"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Flex gap="30px" w="100%" flexDirection="column">
                <Flex
                  gap="28px"
                  bg="deep_purple.50"
                  boxShadow="2xl"
                  flexDirection="column"
                  alignItems="center"
                  p="14px"
                  borderRadius="16px"
                >
                  <Text size="lg" color="black.900" mt="5px" w={{ md: "97%", base: "100%" }} lineHeight="27px">
                    “Rework has been a great way to make the hiring process easier and faster. We&#39;ve been able to
                    save money and time, and the recruiters have been able to find the best employers leads. Highly
                    recommend! “
                  </Text>
                  <Flex gap="19px" alignSelf="stretch" alignItems="start">
                    <Image src="images/img_ellipse_2.png" borderRadius="50%" h="50px" mt="2px" w="50px" />
                    <Flex flexDirection="column" alignItems="center">
                      <Text size="3xl" color="deep_purple.600" fontFamily="Garnett Regular" fontSize="24px">
                        Theresa Webb
                      </Text>
                      <Text color="gray.700_01" fontWeight={500}>
                        HR Manager, Amazon
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  gap="28px"
                  bg="deep_purple.50"
                  boxShadow="2xl"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  p="15px"
                  borderRadius="16px"
                >
                  <Text size="lg" color="black.900" mt="4px" w={{ md: "97%", base: "100%" }} lineHeight="27px">
                    “ Rework has been a great way to make the hiring process easier and faster. We&#39;ve been able to
                    save money and time, ““ Rework has been a great way to make the hiring process easier and faster.
                    Highly recommend! “
                  </Text>
                  <Flex gap="19px" alignSelf="stretch" alignItems="start">
                    <Image src="images/img_ellipse_1.png" borderRadius="50%" h="50px" mt="2px" w="50px" />
                    <Flex flexDirection="column" alignItems="start">
                      <Text size="3xl" color="deep_purple.600" fontFamily="Garnett Regular" fontSize="24px">
                        Ronald Richards
                      </Text>
                      <Text color="gray.700_01" fontWeight={500}>
                        HR Manager, Google
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex gap="30px" w="100%" flexDirection="column">
                <Flex
                  gap="30px"
                  bg="deep_purple.50"
                  boxShadow="2xl"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  p="16px"
                  borderRadius="16px"
                >
                  <Text size="lg" color="black.900" mt="3px" w={{ md: "98%", base: "100%" }} lineHeight="27px">
                    “Rework has been a great way to make the hiring process easier and faster. We&#39;ve been able to
                    save money and time, and the recruiters have been able to find the best employers leads. Highly
                    recommend! ““ Rework has been a great way to make the hiring process easier and faster. Highly
                    recommend! “
                  </Text>
                  <Flex gap="19px" alignSelf="stretch" alignItems="start">
                    <Image src="images/img_ellipse_1_50x50.png" borderRadius="50%" h="50px" w="50px" />
                    <Flex flexDirection="column" alignItems="start">
                      <Text size="3xl" color="deep_purple.600" fontFamily="Garnett Regular" fontSize="24px">
                        Savannah Nguyen
                      </Text>
                      <Text color="gray.700_01" fontWeight={500}>
                        HR Manager, Microsoft
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  gap="28px"
                  bg="deep_purple.50"
                  boxShadow="2xl"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  p="15px"
                  borderRadius="16px"
                >
                  <Text size="lg" color="black.900" mt="4px" w={{ md: "97%", base: "100%" }} lineHeight="27px">
                    “Rework has been a great way to make the hiring process easier and faster. We&#39;ve been able to
                    save money and time, and the recruiters have been able to find the best employers leads. Highly
                    recommend! “
                  </Text>
                  <Flex gap="19px" alignSelf="stretch" alignItems="start">
                    <Image src="images/img_ellipse_1.png" borderRadius="50%" h="50px" mt="2px" w="50px" />
                    <Flex flexDirection="column" alignItems="start">
                      <Text size="3xl" color="deep_purple.600" fontFamily="Garnett Regular" fontSize="24px">
                        Ronald Richards
                      </Text>
                      <Text color="gray.700_01" fontWeight={500}>
                        HR Manager, Google
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex gap="30px" w="100%" flexDirection="column">
                <Flex
                  gap="28px"
                  bg="deep_purple.50"
                  boxShadow="2xl"
                  flexDirection="column"
                  alignItems="center"
                  p="14px"
                  borderRadius="16px"
                >
                  <Text size="lg" color="black.900" mt="5px" w={{ md: "97%", base: "100%" }} lineHeight="27px">
                    “Rework has been a great way to make the hiring process easier and faster. We&#39;ve been able to
                    save money and time, and the recruiters have been able to find the best employers leads. Highly
                    recommend! “
                  </Text>
                  <Flex gap="19px" alignSelf="stretch" alignItems="start">
                    <Image src="images/img_ellipse_2.png" borderRadius="50%" h="50px" mt="2px" w="50px" />
                    <Flex flexDirection="column" alignItems="center">
                      <Text size="3xl" color="deep_purple.600" fontFamily="Garnett Regular" fontSize="24px">
                        Theresa Webb
                      </Text>
                      <Text color="gray.700_01" fontWeight={500}>
                        HR Manager, Amazon
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  gap="28px"
                  bg="deep_purple.50"
                  boxShadow="2xl"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  p="15px"
                  borderRadius="16px"
                >
                  <Text size="lg" color="black.900" mt="4px" w={{ md: "97%", base: "100%" }} lineHeight="27px">
                    “ Rework has been a great way to make the hiring process easier and faster. We&#39;ve been able to
                    save money and time, ““ Rework has been a great way to make the hiring process easier and faster.
                    Highly recommend! “
                  </Text>
                  <Flex gap="19px" alignSelf="stretch" alignItems="start">
                    <Image src="images/img_ellipse_1.png" borderRadius="50%" h="50px" mt="2px" w="50px" />
                    <Flex flexDirection="column" alignItems="start">
                      <Text size="3xl" color="deep_purple.600" fontFamily="Garnett Regular" fontSize="24px">
                        Ronald Richards
                      </Text>
                      <Text color="gray.700_01" fontWeight={500}>
                        HR Manager, Google
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            gap="26px"
            bg="gray.100"
            alignSelf="stretch"
            justifyContent="center"
            alignItems="center"
            px="56px"
            py="95px"
            flexDirection={{ md: "row", base: "column" }}
            p={{ md: "", base: "20px" }}
          >
            <Text
              size="4xl"
              color="deep_purple.600"
              fontFamily="SF Pro Display"
              fontSize="38px"
              w={{ md: "30%", base: "100%" }}
            >
              <Text size="4xl" as="span" color="deep_purple.600" fontFamily="Garnett Medium">
                How Rework AI has been a good&nbsp;
              </Text>
              <Text size="4xl" as="span" color="deep_purple.600" fontFamily="Garnett Regular" fontWeight={400}>
                Hiring platform for Companies
              </Text>
            </Text>
            <Flex
              mb="8px"
              gap="18px"
              alignSelf="end"
              w={{ md: "63%", base: "100%" }}
              justifyContent="center"
              alignItems="center"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Flex gap="10px" flex={1} flexDirection="column" alignItems="center" alignSelf="stretch">
                <Heading size="3xl" fontFamily="Space Grotesk" fontSize="50px">
                  80%
                </Heading>
                <Text size="lg" color="gray.800" textAlign="center">
                  Reduction in your recruitment TAT with the access to a wider talent pool on the platform
                </Text>
              </Flex>
              <Box h={{ md: "100%", base: "2px" }} bg="deep_purple.600" w={{ md: "2px", base: "100%" }} />
              <Flex
                gap="10px"
                alignSelf={{ md: "start", base: "stretch" }}
                flex={1}
                flexDirection="column"
                alignItems="center"
              >
                <Heading size="3xl" as="h3" fontFamily="Space Grotesk" fontSize="50px">
                  50%
                </Heading>
                <Text size="lg" color="gray.800" textAlign="center">
                  Streamline your budgeting and save money while finding the top candidates
                </Text>
              </Flex>
              <Box h={{ md: "100%", base: "2px" }} bg="deep_purple.600" w={{ md: "2px", base: "100%" }} />
              <Flex
                gap="10px"
                alignSelf={{ md: "start", base: "stretch" }}
                flex={1}
                flexDirection="column"
                alignItems="center"
              >
                <Heading size="3xl" as="h4" fontFamily="Space Grotesk" fontSize="50px">
                  10k
                </Heading>
                <Text size="lg" color="gray.800" textAlign="center">
                  Certified sourcing partners’ expertise
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Box alignSelf="stretch">
            <Flex
              gap="48px"
              bg="white.A700"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              px="56px"
              py="75px"
              p={{ md: "", base: "20px" }}
            >
              <Heading textTransform="capitalize" fontSize="42px">
                <Heading as="span" color="deep_purple.600">
                  Success&nbsp;
                </Heading>
                <Heading as="span" color="deep_purple.600" fontFamily="Garnett Regular" fontWeight={400}>
                  Stories
                </Heading>
              </Heading>
              <Box w="100%" mx="auto">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 3 } }}
                  renderDotsItem={(props) => <Square size="10px" bg={props.isActive ? "black.900" : "white.A700_01"} />}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setSliderState(e?.item);
                  }}
                  ref={sliderRef}
                  gap="20px"
                  display="flex"
                  maxW="1192px"
                  items={[...Array(9)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <Flex
                        gap="10px"
                        bg="gray.50_01"
                        boxShadow="3xl"
                        flexDirection="column"
                        mx="10px"
                        borderRadius="16px"
                      >
                        <Image
                          src="images/img_unsplash_mpdlxiig0p0.png"
                          h="245px"
                          borderTopLeftRadius="16px"
                          borderTopRightRadius="16px"
                        />
                        <Flex gap="30px" flexDirection="column" p="20px">
                          <Text
                            size="2xl"
                            color="gray.900_04"
                            fontFamily="Garnett Medium"
                            fontSize="23px"
                            lineHeight="27px"
                          >
                            Rework has been a great way to make the hiring process easier and faster.
                          </Text>
                          <Text size="lg" color="gray.700_01" lineHeight="27px">
                            “We&#39;ve been able to save money and time, and the recruiters have been able to find the
                            best employers leads. Highly recommend! “
                          </Text>
                        </Flex>
                      </Flex>
                    </React.Fragment>
                  ))}
                />
              </Box>
            </Flex>
            <Flex
              gap={{ md: "74px", base: "37px", sm: "55px" }}
              bg="gray.100"
              flexDirection="column"
              alignItems="center"
              px="56px"
              py="109px"
              p={{ md: "", base: "20px" }}
            >
              <Flex gap="19px" w={{ md: "62%", base: "100%" }} flexDirection="column" alignItems="center">
                <Heading as="h3" textAlign="center" fontSize="42px">
                  <Heading as="span" color="deep_purple.600">
                    Frequently asked&nbsp;
                  </Heading>
                  <Heading as="span" color="deep_purple.600" fontFamily="Garnett Regular" fontWeight={400}>
                    Questions
                  </Heading>
                </Heading>
                <Text color="gray.900" textAlign="center" lineHeight="22px">
                  We have Compiled the most commonly asked question about our Platform for your information and to
                  enhance your overall experience.
                </Text>
              </Flex>
              <Accordion defaultIndex={[0]} mb="48px" gap="16px" display="flex" w="64%" flexDirection="column">
                {[...Array(8)].map(() => (
                  <AccordionItem>
                    {(props) => (
                      <>
                        <AccordionButton
                          mt="16px"
                          borderColor="deep_purple.600"
                          borderWidth="2px"
                          borderStyle="solid"
                          flex={1}
                          display="flex"
                          justifyContent="space-between"
                          alignItems="start"
                          gap="20px"
                          p="17px"
                          borderRadius="10px"
                        >
                          <Text size="lg" color="gray.900" mb="3px" ml={{ md: "11px", base: "0px" }} fontWeight={500}>
                            How can I Get started with Rework AI?
                          </Text>
                          <Image src="images/img_typcn_plus.svg" h="24px" mr={{ md: "11px", base: "0px" }} w="24px" />
                        </AccordionButton>
                      </>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </Flex>
          </Box>
          <Flex
            pl="113px"
            pr="56px"
            gap={{ base: "30px", sm: "60px" }}
            bg="white.A700"
            alignSelf="stretch"
            flexDirection="column"
            alignItems="start"
            justifyContent="center"
            py="113px"
            p={{ md: "", base: "20px" }}
          >
            <Flex ml={{ md: "12px", base: "0px" }} gap="20px" w={{ md: "93%", base: "100%" }} flexDirection="column">
              <Heading fontSize="42px">Optimize Your Hiring Strategy with Rework&#39;s Exclusive Hiring Audit</Heading>
              <Text size="lg" color="gray.900_02">
                Discover the strengths and opportunities in your current hiring process. Our comprehensive Hiring Audit
                evaluates your strategy, identifies areas for improvement, and tailors a roadmap for success. Elevate
                your recruitment game with data-driven insights – because the right talent deserves the right approach.
              </Text>
            </Flex>
            <Button
              size="xl"
              mb="12px"
              ml={{ md: "12px", base: "0px" }}
              fontWeight={500}
              minW="476px"
              borderRadius="20px"
              px={{ base: "20px", sm: "" }}
            >
              Request Your Free Hiring Audit
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
