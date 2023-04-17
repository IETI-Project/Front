import {Link,useNavigate} from "react-router-dom";
import {Button, Input} from "@chakra-ui/react";
import {useState} from "react";

export function Menu(){
    const [isActive,setActive] = useState(false)
    const [searchId,setSearchId] = useState()
    const navigate = useNavigate()

    function handleIdSearch() {
        navigate("event/"+searchId)
    }

    function handleIdSearchInput(event) {
        if (!isNaN(event.target.value)){
            setSearchId(event.target.value)
            setActive(true)
        }
        else {
            setActive(false)
        }
    }

    return (
      <ul>
          <li>
              <Link to="/">Eventos</Link>
          </li>
          <li>
              <Link to="/">Login</Link>
          </li>
          <li>
              <Input id="id-search" placeholder="ID de evento"  onChange={handleIdSearchInput}/>
              <Button onClick={handleIdSearch} isDisabled = {!isActive}>Buscar</Button>
          </li>
      </ul>
    );
}