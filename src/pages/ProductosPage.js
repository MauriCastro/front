import './../styles/components/pages/ProductosPage.css'
const ProductosPage = (props) => {
    return (
        <div className="productos">
            <div className="producto1">
                <h2>TORTAS DE BUTTERCREAM</h2>
                <div className="imagenes">
                    <img src="\images\g4.png" alt="4" />
                    <img src="\images\g5.png" alt="5" />
                    <img src="\images\g6.png" alt="6" />
                </div>
            </div>
            <div className="producto2">
                <h2>TORTAS FORRADAS</h2>
                <div className="imagenes">
                    <img src="\images\g7.png" alt="7" />
                    <img src="\images\g8.png" alt="8" />
                    <img src="\images\g9.png" alt="9" />
                </div>
            </div>
            <div className="producto3">
                <h2>CAKEPOPS</h2>
                <div className="imagenes">
                    <img src="\images\g1.png" alt="1" />
                    <img src="\images\g2.png" alt="2" />
                    <img src="\images\g3.png" alt="3" />
                </div>
            </div>
            <div className="producto4">
                <h2>PALETAS</h2>
                <div className="imagenes">
                    <img src="\images\g10.png" alt="10" />
                    <img src="\images\g11.png" alt="11" />
                    <img src="\images\g12.png" alt="12" />
                </div>
            </div>

        </div>
    )
}

export default ProductosPage