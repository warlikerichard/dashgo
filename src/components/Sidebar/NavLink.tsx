import { Icon, Link, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends LinkProps{
    children: string;
    icon: ElementType;
}

export default function NavLink({children, icon, ...rest}: NavLinkProps){
    return(
        <Link display="flex" alignItems="center" {...rest}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">{children}</Text>
        </Link>
    );
}