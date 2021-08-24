import './styles/SectionTwo.css';
import phones from './images/illustration-phones.svg';

function SectionTwo(){
    return (
        <section class="infrastructure">
            <div class="contain-width infra--flex">
                <img class="infrastructure__img" src={phones} alt=""/>
                <div class="infrastructure__info">
                    <h1>State of the Art Infrastructure</h1>
                    <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                </div>
            </div>
        </section>
    );
}

export default SectionTwo;
