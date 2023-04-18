import {useState} from "react";
import EventService from "../../services/event-service";
import { Button, Flex, Modal, ModalOverlay, ModalContent, Input, Box, FormControl, FormLabel } from "@chakra-ui/react";


export function AddEvent(){
    const [isOpen, setIsOpen] = useState(false);

    const[name, setName] = useState("");
    const[type, setType] = useState("");
    const[desc, setDesc] = useState("");
    const[locat, setLocat] = useState("");
    const[date, setDate] = useState("");
    const[host, setHost] = useState("");
    const[capaci, setCapaci] = useState("");
    const[price, setPrice] = useState("");
    const[locality, setLocality] = useState("");
    const[photo, setPhoto] = useState("");
    const[stateCreate, setStateCreate] = useState(undefined);

    const[validateForm, setValidateForm] = useState({
        name: undefined,
        type: undefined,
        desc: undefined,
        locat: undefined,
        date: undefined,
        price: undefined,
        locality: undefined,
    });

    const onSumbit = () => {
        let newEvent = {
            "name": name,
            "type": type,
            "desc": desc,
            "location": locat,
            "date": date,
            "host": host,
            "capacitity": capaci ,
            "price": price,
            "locality": locality,
            "photoURl": photo
        }
        EventService.postEvent(newEvent).then(
            (response) => {
                setStateCreate("Evento creado")
            },
            (error) => {
              const _content =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                console.log(error.toString());
                setStateCreate("No se pudo crear el evento")
            });
            window.location.reload();
        // console.log(JSON.stringify(newEvent));
    };

    const handleChangeName = (event) => {
        const val = event.target.value;
        setValidateForm({
            ... validateForm,
            name: val.length < 3? "El nombre debe ser mas largo" : "",
        })
        setName(val);
    }
    const handleChangeType = (event) => {
        const val = event.target.value;
        setValidateForm({
            ... validateForm,
            type: val.length < 3? "El tipo debe ser mas largo": "",
        })
        setType(val);
    }
    const handleChangeDesc = (event) => {
        const val = event.target.value;
        setValidateForm({
            ... validateForm,
            desc: val.length === 0? "La descripción es obligatoria":"",
        })
        setDesc(val);
    }

    const handleChangeLocat = (event) => {
        const val = event.target.value;
        setValidateForm({
            ... validateForm,
            locat: val.length < 3? "La Ubicación debe ser mas larga":"",
        })
        setLocat(val);
    }
    
    
    const handleChangeDate = (event) => {
        const val = event.target.value;
        setValidateForm({
            ... validateForm,
            date: val.length < 10 ? 'Ingrese una fecha valida dd/mm/yyyy': !val.includes("/") ? 'Separe la fecha por "/"': "",
        })
        setDate(val);
    }

    const handleChangePrice = (event) => {
        const val = event.target.value;
        setValidateForm({
            ... validateForm,
            price: val.length === 0? "El precio es obligatoria":"",
        })
        setPrice(val);
    }

    const handleChangeLocality = (event) => {
        const val = event.target.value;
        setValidateForm({
            ... validateForm,
            locality: val.length < 3? "La lacalidad debe ser mas larga":"",
        })
        setLocality(val);
    }

    const handleChangePhoto = (event) => {
        const val = event.target.value;
        setPhoto(val);
    }

    const handleChangeHost = (event) => {
        const val = event.target.value;
        setHost(val);
    }

    const handleChangeCapaci = (event) => {
        const val = event.target.value;
        setCapaci(val);
    }

    const isValid = Object.keys(validateForm).every(key => validateForm[key] == "");
    
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const onTooglePopover = () => {
        console.log(isPopoverOpen)
        setIsPopoverOpen(!isPopoverOpen);
      }
  
    return (
        <Flex width='100%'>
            {!isPopoverOpen && (
                <Flex position="sticky" width='100%' justifyItems='center'>
                    <Button margin='auto' onClick={onTooglePopover} marginTop='1%' bgColor='#a60054' color='wheat' padding='0.8%' borderRadius='15px' transition = '0.3s' _hover={{backgroundColor : '#59002d', transition : '0.3s', padding : '1%'}}>Crear nuevo evento</Button>
                </Flex>
            )}
                <Modal isOpen={isPopoverOpen} onClose={onTooglePopover}>
                    <ModalOverlay />
                    <ModalContent bgColor="rgba(58, 80, 96, 0.98)" h='80vh' w='80vw' margin='auto' borderRadius="50px" marginTop='5%' overflow='auto'>
                        <Flex marginLeft='5%' width='95%'>
                            <Box width="100%">
                                <FormControl direction = "row">
                                    <FormLabel bgColor="rgb(58, 80, 96)" color="white" width="fit-content">Nombre del evento:</FormLabel>
                                    <Input width="90%" value={name} type="text" placeholder="Nombre del evento" onChange={handleChangeName}/>
                                    {validateForm.name && (<span style={{color: '#ffc344'}}>{validateForm.name}</span>)}
                                </FormControl>
                                <FormControl>
                                    <FormLabel bgColor="rgb(58, 80, 96)" color="white" width="fit-content">Tipo de evento:</FormLabel>
                                    <Input width="90%" value={type} type="text" placeholder="Tipo de evento(ej:Concierto, exposicion, etc)" onChange={handleChangeType}/>
                                    {validateForm.type && (<span style={{color: '#ffc344'}} className="error">{validateForm.type}</span>)}
                                </FormControl>
                                <FormControl>
                                    <FormLabel bgColor="rgb(58, 80, 96)" color="white" width="fit-content">Descripción del evento:</FormLabel>
                                    <Input width="90%" onChange={handleChangeDesc} value={desc} type="text" placeholder="Descripcion del evento"/>
                                    {validateForm.desc && (<span style={{color: '#ffc344'}} className="error">{validateForm.desc}</span>)}
                                </FormControl>
                                <FormControl>
                                    <FormLabel bgColor="rgb(58, 80, 96)" color="white" width="fit-content">Ubicación del evento:</FormLabel>
                                    <Input width="90%" onChange={handleChangeLocat} value={locat} type="text" placeholder="Ubicación del evento"/>
                                    {validateForm.locat && (<span style={{color: '#ffc344'}} className="error">{validateForm.locat}</span>)}
                                </FormControl>
                                <FormControl>
                                    <FormLabel bgColor="rgb(58, 80, 96)" color="white" width="fit-content">Fecha del evento:</FormLabel>
                                    <Input width="90%" onChange={handleChangeDate} value={date} type="text" placeholder="Fecha del evento (dd/mm/yyy HH:HH)"/>
                                    {validateForm.date && (<span style={{color: '#ffc344'}} className="error">{validateForm.date}</span>)}
                                </FormControl>
                                <FormControl>
                                    <FormLabel bgColor="rgb(58, 80, 96)" color="white" width="fit-content">Nombre del organizador del evento:</FormLabel>
                                    <Input width="90%" onChange={handleChangeHost} value={host} type="text" placeholder="Nombre del organizador del evento"/>
                                </FormControl>
                                <FormControl>
                                    <FormLabel bgColor="rgb(58, 80, 96)" color="white" width="fit-content">Aforo del evento:</FormLabel>
                                    <Input width="90%" onChange={handleChangeCapaci} value={capaci} type="text" placeholder="Aforo del evento"/>
                                    {validateForm.capaci && (<span style={{color: '#ffc344'}} className="error">{validateForm.capaci}</span>)}
                                </FormControl>
                                <FormControl>
                                    <FormLabel bgColor="rgb(58, 80, 96)" color="white" width="fit-content">Precio de entrada al evento:</FormLabel>
                                    <Input width="90%" onChange={handleChangePrice} value={price} type="text" placeholder="Precio de entrada al evento"/>
                                    {validateForm.price && (<span style={{color: '#ffc344'}} className="error">{validateForm.price}</span>)}
                                </FormControl>
                                <FormControl>
                                    <FormLabel bgColor="rgb(58, 80, 96)" color="white" width="fit-content">Localidad del evento:</FormLabel>
                                    <Input width="90%" onChange={handleChangeLocality} value={locality} type="text" placeholder="Localidad del evento"/>
                                    {validateForm.locality && (<span style={{color: '#ffc344'}} className="error">{validateForm.locality}</span>)}
                                </FormControl>
                                <FormControl>
                                    <FormLabel bgColor="rgb(58, 80, 96)" color="white" width="fit-content">Foto del evento:</FormLabel>
                                    <Input width="90%" onChange={handleChangePhoto} value={photo} type="text" placeholder="Foto del evento"/>
                                </FormControl>
                                <Flex p="30px" width='100%' justifyContent='center'>
                                    <button disabled={!isValid} onClick={onSumbit}>Crear evento</button>
                                    {stateCreate && (<span style={{color: '#ffc344'}} className="error">{stateCreate}</span>)}
                                </Flex>
                            </Box>
                        </Flex>
                    </ModalContent>
                </Modal>
        </Flex>
    )
}