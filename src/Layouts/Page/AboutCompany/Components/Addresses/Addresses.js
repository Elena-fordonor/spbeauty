import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-flex flex-column gap-2 justify-content-between border'>
            <div className="d-inline-flex flex-column">
            <div className="title m-4">Адреса заведений</div>
               <div className="d-inline-flex flex-column gap-4 m-4"> 
                <div className="mb-2"> <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement> </div>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                    </div>
                </div>
                 <div className="m-4"> <SecondaryButton>Добавить филиал</SecondaryButton> </div>
            </div>
    );
}

export default Addresses;