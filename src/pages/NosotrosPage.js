import './../styles/components/pages/NosotrosPage.css'
const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="equipo">
                <h2>NUESTRO EQUIPO</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="\images\B.png" alt="Bren"/>
                        <h3>Bren</h3>
                        <h4>Fundadora</h4>
                        <p>Pastelera y fundadora de la empresa. Diseñadora de tortas personalizadas.</p>
                    </div>
                    <div className="persona">
                        <img src="\images\C.png" alt="Coti"/>
                        <h3>Coti</h3>
                        <h4>Ayudante Pastelera</h4>
                        <p>Encargada de chocolatería.</p>
                    </div>
                    <div className="persona">
                        <img src="\images\J.png" alt="Juli"/>
                        <h3>Juli</h3>
                        <h4>Ayudante Pastelera</h4>
                        <p>Encargada de cakepops y redes sociales.</p>
                    </div>
                </div>                
            </div>
        </main>
    ) 
}

export default NosotrosPage