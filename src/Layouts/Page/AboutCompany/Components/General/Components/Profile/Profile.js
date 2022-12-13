import Avatar from "./Avatar";
function Profile() {
    return (
        <div className='d-inline-flex flex-row ms-5'>
            <Avatar/>
            <div className='ms-3 d-inline-flex flex-column justify-content-center gap-1'>
                <div className='title mb-2'>SPBEAUTY</div>
                <div className="text-caption">Салон красоты</div>
                <div className="text-caption">Санкт-Петербург, Невский пр-т. 28</div>
            </div>                  
        </div>
    );
}

export default Profile;