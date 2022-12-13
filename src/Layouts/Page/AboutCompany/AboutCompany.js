import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div>
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='d-flex row gap-4'>
              <div className="col"> <General/>  </div>   {/* Основная информация вроде названия, типа и телефона */}
               <div className="col"> <Addresses/> </div> {/* Список доступных адресов заведений */}
            </div>
        </div>
    );
}

export default AboutCompany;