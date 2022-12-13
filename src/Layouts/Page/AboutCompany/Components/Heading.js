import PrimaryButton from "../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../Components/SecondaryButton";
function Heading() {
    return (
        
    <div className='d-flex flex-row justify-content-between align-items-center gap-5 m-5'>
            <div className='large-title'>Данные о компании </div> 
            <div className="me-2">
            <div className="me-5">   
            <div className="me-5"> <SecondaryButton>Закрыть запись</SecondaryButton> </div>
            </div>
            </div>
            </div>
        
        
    
    )
}

export default Heading;