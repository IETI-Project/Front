import {useState} from "react";
import EventService from "../../services/event-service";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody } from "@chakra-ui/react";


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

    const onSumbit = (data) => {
        data.preventDefault();
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

    return(
        <div>
            <button onClick={() => setIsOpen(true)}>Abrir pop-up</button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} backgroundColor="#f8f8f8">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear evento</ModalHeader>
                    <ModalBody>
                    <form onSubmit={onSumbit}>
                        <div>
                            <label>
                                Nombre del evento:
                                <input value={name} type="text" placeholder="Nombre del evento" onChange={handleChangeName}/>
                            </label>
                            {validateForm.name && (<span className="error">{validateForm.name}</span>)}
                        </div>
                        <div>
                            <label>
                                Tipo de evento:
                                <input value={type} type="text" placeholder="Tipo de evento(ej:Concierto, exposicion, etc)" onChange={handleChangeType}/>
                            </label>
                            {validateForm.type && (<span className="error">{validateForm.type}</span>)}
                        </div>
                        <div>
                            <label>
                                Descripción del evento:
                                <input onChange={handleChangeDesc} value={desc} type="text" placeholder="Descripcion del evento"/>
                            </label>
                            {validateForm.desc && (<span className="error">{validateForm.desc}</span>)}
                        </div>
                        <div>
                            <label>
                                Ubicación del evento:
                                <input onChange={handleChangeLocat} value={locat} type="text" placeholder="Ubicación del evento"/>
                            </label>
                            {validateForm.locat && (<span className="error">{validateForm.locat}</span>)}
                        </div>
                        <div>
                            <label>
                                Fecha del evento:
                                <input onChange={handleChangeDate} value={date} type="text" placeholder="Fecha del evento (dd/mm/yyy HH:HH)"/>
                            </label>
                            {validateForm.date && (<span className="error">{validateForm.date}</span>)}
                        </div>
                        <div>
                            <label>
                                Nombre del organizador del evento:
                                <input onChange={handleChangeHost} value={host} type="text" placeholder="Nombre del organizador del evento"/>
                            </label>
                        </div>
                        <div>
                            <label>
                                Aforo del evento:
                                <input onChange={handleChangeCapaci} value={capaci} type="text" placeholder="Aforo del evento"/>
                            </label>
                            {validateForm.capaci && (<span className="error">{validateForm.capaci}</span>)}
                        </div>
                        <div>
                            <label>
                                Precio de entrada al evento:
                                <input onChange={handleChangePrice} value={price} type="text" placeholder="Precio de entrada al evento"/>
                            </label>
                            {validateForm.price && (<span className="error">{validateForm.price}</span>)}
                        </div>
                        <div>
                            <label>
                                Localidad del evento:
                                <input onChange={handleChangeLocality} value={locality} type="text" placeholder="Localidad del evento"/>
                            </label>
                            {validateForm.locality && (<span className="error">{validateForm.locality}</span>)}
                        </div>
                        <div>
                            <label>
                                Foto del evento:
                                <input onChange={handleChangePhoto} value={photo} type="text" placeholder="Foto del evento"/>
                            </label>
                        </div>
                        <button disabled={!isValid}>Crear evento</button>
                        {stateCreate && (<span className="error">{stateCreate}</span>)}
                    </form>
                    </ModalBody>
                    <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={() => setIsOpen(false)}>
                        Cerrar
                    </Button>
                    <Button variant="ghost">Guardar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            
        </div>
    )


}