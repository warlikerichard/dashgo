import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from './PaginationItem';

interface PaginationProps{
    totalCountOfRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number)=> void
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number){
    return [...new Array(to - from)].map((_, index)=>{
        return from + index;
    }).filter(page => page > 0)
}

export default function Pagination({
    totalCountOfRegisters,
    registersPerPage = 10,
    currentPage = 1,
    onPageChange
} : PaginationProps){
    const lastPage = Math.floor(totalCountOfRegisters/registersPerPage)

    const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - siblingsCount, currentPage)
    : []

    const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage + 1, Math.min(currentPage + siblingsCount + 1, lastPage + 1))
    : []
    return(
        <Stack
            direction={["column", "row"]}
            mt="8"
            justify="space-between"
            align="center"
            spacing="6"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> <strong>de</strong> <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">

                {currentPage > 1 + siblingsCount && (
                    <>
                        <PaginationItem onPageChange={onPageChange} number={1} />
                        {currentPage > 2 + siblingsCount &&
                        <Text
                        color="gray.300"
                        width="8"
                        textAlign="center"
                        >...</Text>
                        }
                    </>
                )}

                {previousPages.length > 0 && 
                previousPages.map(item => {
                    return(                       
                        <PaginationItem onPageChange={onPageChange} key={item} number={item} />
                    )
                })}

                <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent/>

                {nextPages.length > 0 &&
                nextPages.map(item => {
                    return(
                        <PaginationItem onPageChange={onPageChange} key={item} number={item} />
                    )
                })}

                {currentPage < lastPage - siblingsCount && (
                    <>
                    {currentPage < lastPage - siblingsCount - 1 &&
                        <Text
                        color="gray.300"
                        width="8"
                        textAlign="center"
                        >...</Text>
                        }
                        <PaginationItem onPageChange={onPageChange} number={lastPage} />
                    </>
                    
                )}

            </Stack>
        </Stack>
    )
}