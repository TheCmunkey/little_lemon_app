import { Box, HStack, Link } from "@chakra-ui/react";

export default function Footer()
{
	return (
		<Box
            w='100%'
            h='auto'
			backgroundColor="#495E57">
			<nav>
				<HStack
				px={6}
				py={4}
				justifyContent="space-between"
				alignItems="center"
				spacing={8}>
					<Link href="home" >Home</Link>
					<Link href="home" >Home</Link>
					<Link href="home" >Home</Link>
				</HStack>
			</nav>
		</Box>
	);
};

