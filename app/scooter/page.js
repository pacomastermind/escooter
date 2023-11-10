import ScooterCard from "../component/ScooterCard"
import ScooterTop from "../component/ScooterTop"
import SearchNav from "../component/SearchNav"

//Get data from json-server, Top Products
async function getTopProducts() {
    const res = await fetch(process.env.DB_HOST+'products?destacado=1', { next: { revalidate: 86400 } })
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

//Get data from json-server, Products
async function getProducts(precio) {
    let res

    //Comprobamos que precio no esté vacio
    if(precio) res = await fetch(process.env.DB_HOST+'products?precio_lte='+precio)
    else res = await fetch(process.env.DB_HOST+'products')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function Scooter({searchParams}) {
    const products = await getProducts(searchParams.precio)
    console.log(products)
    const topProducts = await getTopProducts()
    console.log(topProducts)
    //console.log(searchParams)
    return (
    <>
    <SearchNav/>
    {/* CONTENIDO */}
    <div className="container mb-5 mt-5">
        <h2>Scooters ({products.length}) </h2>
        <div className="grid">
        <div className="row mt-3">
            <div className="col-8">
            {/*DESTACADOS TARJETAS*/}
            <div className="d-flex p-2 flex-wrap justify-content-between">
            {
                    products.map(product=>(
                        <ScooterCard key={product.id} img={"./img/" + product.img} modelo={product.modelo} txt={product.txt}  id={product.id}/>
                        )
                    )
            }
            </div>
            </div>
            <div className="col-4">
            {/*DESTACADOS APILADOS*/}
            <div className="card">
                <div className="card-header">
                <h4>Top</h4>
                </div>
                <ul className="list-group list-group-flush">
                {
                    topProducts.map(topProduct=>(
                        <ScooterTop key={topProduct.id} modelo={topProduct.modelo} precio={topProduct.precio}/>
                        )
                    )
                }
                </ul>
            </div>
            </div>
        </div>
        </div>
    </div>
    {/* CONTENIDO */}
    </>

        )
    }