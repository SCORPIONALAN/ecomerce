import {Container, VStack, Text} from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';
const HomePage = () =>{
    const {fetchProducts, products} = useProductStore()
    useEffect(()=>{fetchProducts();},[fetchProducts])
    console.log(products);
    return(
        <Container maxW={'container.xl'} py={12}>
            <VStack spacing={8}>
                <Text
                    bgGradient={'linear(to-r,rgb(59, 198, 223),rgb(0, 17, 255))'}
                    bgClip={'text'}
                    fontSize={{base:"22", sm:"28"}}
                    fontWeight={'bold'}
                    textTransform={'uppercase'}
                    textAlign={'center'}
                    >
                        Current Proyects 🚀
                </Text>
                {products.length > 0 && <SimpleGrid
                    columns={{base:1, md:2, lg:3}}
                    spacing={10}
                    w={"full"}>
                        {products.map((product) =>(
                            <ProductCard key={product._id} product={product}/>
                        ))}
                </SimpleGrid>}
                
                {products.length === 0 &&
                <Text fontSize={'xl'} textAlign={'center'} fontWeight={'bold'} color={'gray.500'}>
                    No products found 😞 {" "}
                    <Link to={"/create"}>
                        <Text as='span' color='blue.500' _hover={{textDecoration:"underline"}}>
                            Create a product
                        </Text>
                    </Link>
                </Text>}
            </VStack>
        </Container>
    );
}
export default HomePage;