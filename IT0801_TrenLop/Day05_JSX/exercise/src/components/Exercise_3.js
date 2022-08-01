import 'bootstrap/dist/css/bootstrap.css';
import BackGroundIMG from '../picture/troidem.jpg';
import Avatar from '../picture/LLL.jpg';


function ProfileCard (){
    return ( 
        <div class="container d-flex justify-content-center align-items-center mt-5">
             
            <div class="card">

              <div class="upper">

                <img src={BackGroundIMG} class="img-fluid" width="100%"></img>
                
              </div>
              <div className = "mb-5">
                <img src={Avatar} class="rounded-circle position-absolute top-40 start-50 translate-middle" width={110}></img>
              </div>
              <div class="text-center">
                <h4 class="">L.Law Liet</h4>
                <span class="text-muted d-block mb-3 px-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>

                <button class="btn btn-primary btn-sm follow mb-5">Follow</button>

              </div>
               
            </div>

        </div>   
    );
}
export default ProfileCard;