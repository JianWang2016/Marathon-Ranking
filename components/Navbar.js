import Link from "next/link"
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout, FcLike, FcBusinessman, FcBusinesswoman, FcDatabase, FcQuestions} from 'react-icons/fc'

const Navbar = () => (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box fontSize="xl" color="blue.400" fontWeight="bold">
            <Link href="/" paddingleft="2">2022 North America Chinese Marathon Runner Finish Time Ranking</Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
                <MenuList>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcDatabase />}>All Ranking</MenuItem>
                    </Link>
                    <Link href="/male" passHref>
                        <MenuItem icon={<FcBusinessman />}>Male Ranking</MenuItem>
                    </Link>
                    <Link href="/female" passHref>
                        <MenuItem icon={<FcBusinesswoman />}>Female Ranking</MenuItem>
                    </Link>
                    <Link href="/entry" passHref>
                        <MenuItem icon={<FcLike />}>Join to rank</MenuItem>
                    </Link>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcQuestions />}>Contact us</MenuItem>
                    </Link>
                </MenuList>

            </Menu>
        </Box>
    </Flex>

)

export default Navbar