import Link, { LinkProps} from 'next/link'
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps{
    children: ReactElement;
    href: string;
}

export function ActiveLink({children, href, ...rest}: ActiveLinkProps){
    const { asPath } = useRouter();
    const isActive = asPath.startsWith(href);

    return(
        <Link href={href} {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50'
            })}
        </Link>
    )
}