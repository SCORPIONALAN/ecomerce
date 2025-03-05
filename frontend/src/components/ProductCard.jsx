import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Text, Box, Heading, Image, HStack, IconButton, useColorModeValue, useToast, Modal, useDisclosure, ModalOverlay, ModalBody, ModalContent, ModalHeader, ModalCloseButton, VStack, Input, Button, ModalFooter } from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import { useState } from "react";

const ProductCard = ({product})=>{
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg= useColorModeValue("white", "gray.800");

    const{deleteProduct}=useProductStore();

    //Modal
    const {isOpen, onOpen, onClose} = useDisclosure();

    //Estado para actualizar
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const toast = useToast();
    const handledDeleteProduct = async(pid) =>{
        const {success, message } = await deleteProduct(pid);
        if(!success){
            toast({
                title:"error",
                description: message,
                status:"error",
                duration: 3000,
                isClosable: true
            })
        }else{
            toast({
                title:"Success",
                description: message,
                status:"success",
                duration: 3000,
                isClosable: true
            })
        }
    }

    const{updateProduct}=useProductStore();
    const handleUpdatedProduct = async(pid, updatedProduct) => {
        const {success, message } = await updateProduct(pid, updatedProduct);
        if(!success){
            toast({
                title:"error",
                description: message,
                status:"error",
                duration: 3000,
                isClosable: true
            })
        }else{
            toast({
                title:"Success",
                description: message,
                status:"success",
                duration: 3000,
                isClosable: true
            })
        }
    }
    return(
        <Box
            shadow='lg'
            rounded='lg'
            overflow='hidden'
            transition='all 0.3s'
            _hover={{transform:"translateY(-5px)", shadow:'xl'}}
            bg={bg}
        >
            <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover'/>
            <Box p={4}>
                <Heading as='h3' size='md' mb={2}>
                    {product.name}
                </Heading>
                <Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>
                    ${product.price}
                </Text>
                <HStack spacing={2}>
                    <IconButton icon={<EditIcon/>}  colorScheme="blue"
                    onClick={onOpen}/>
                    <IconButton icon={<DeleteIcon/>} onClick={() =>handledDeleteProduct(product._id)} colorScheme="red"/>
                </HStack>
            </Box>


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Actualiza el producto</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input
                            placeholder="Nombre del producto"
                            name='name'
                            value={updatedProduct.name}
                            onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})}
                            />
                            <Input
                            placeholder="Precio del producto"
                            name='price'
                            value={updatedProduct.price}
                            onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})}
                            />
                            <Input
                            placeholder="URL de la imagen"
                            name='image'
                            value={updatedProduct.image}
                            onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})}
                            />
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() =>handleUpdatedProduct(product._id, updatedProduct)}>
                        Actualiza
                        </Button>
                        <Button variant='ghost' onClick={onClose}>Cerrar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}
export default ProductCard;