import Link from "next/link"
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { FaMale, FaFemale } from 'react-icons/fa'


const Navbar = () => (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box fontSize="3xl" color="blue.400" fontWeight="bold">
            <Link href="/" paddingleft="2">Marathon Ranking</Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
                <MenuList>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome />}>All Ranking</MenuItem>
                    </Link>
                    <Link href="/" passHref>
                        <MenuItem icon={<FaFemale />}>Female Ranking</MenuItem>
                    </Link>
                    <Link href="/" passHref>
                        <MenuItem icon={<FaMale />}>Male Ranking</MenuItem>
                    </Link>
                </MenuList>

            </Menu>
        </Box>
    </Flex>

)

export default Navbar