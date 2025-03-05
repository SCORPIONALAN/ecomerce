import { Container, Flex, HStack, Text, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {PlusSquareIcon} from '@chakra-ui/icons';
import {IoMoon} from 'react-icons/io5';
import {LuSun} from 'react-icons/lu';

const Navbar = () =>{
    //Hook de chakraUI
    const {colorMode, toggleColorMode} = useColorMode();
    return(
        <Container maxW={"1140px"} px={4}>
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{
                    base: "column",
                    sm:"row"
                }}>
                    <Text
                    bgGradient={'linear(to-r,rgb(59, 198, 223),rgb(0, 17, 255))'}
                    bgClip={'text'}
                    fontSize={{base:"22", sm:"28"}}
                    fontWeight={'bold'}
                    textTransform={'uppercase'}
                    textAlign={'center'}
                    >
                        <Link to={"/"}>Product store 🛒</Link>
                    </Text>
                    <HStack spacing={2} alignItems={"center"}>
                        <Link to={"/create"}>
                            <Button>
                                {/*Esto es parte de react-icons, pero en esta practica es de chakra*/}
                                <PlusSquareIcon fontSize={20}/>
                            </Button>
                        </Link>
                        <Button onClick={toggleColorMode}>
                            {colorMode === "light"? <IoMoon/> : <LuSun size="20"/>}
                        </Button>
                    </HStack>
            </Flex>
        </Container>
    );
}
export default Navbar;