import './../styles/components/pages/HomePage.css'
const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="alfajores">
                <img src="\images\alfajores.png" alt="alfajores" />
            </div>
            <div className="columnas">
                <div className="left">
                    <h2>Bienvenidos</h2>
                    <p>Cocó es una empresa familiar dedicada a la producción de tortas personalizadas, chocolatería y demás comestibles dulces. Nos dedicamos a esto desde 2015, llegando con amor a los hogares de nuestros clientes para cada gran evento. </p>

                </div>
                <div className="right">
                    <h2>Testimonios</h2>
                    <div className="cajatesti">
                        <span className="cita">Excelente atención ..muy rico todo!!</span>
                        <span className="autor">Norma Suárez</span>
                    </div>


                </div>

            </div>
        </main>
    )
}

export default HomePage