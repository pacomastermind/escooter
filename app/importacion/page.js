import ScooterCard from "../component/ScooterCard"

//Parameters from RapidAPI
const url = process.env.DB_HOST_RAPIDAPI+'item_search?q=scooter&sort=latest&region=ES&currency=EUR';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.KEY_RAPIDAPI,
		'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
	}
};

const url2 = 'https://aliexpress-datahub.p.rapidapi.com/item_detail?itemId=';
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.KEY_RAPIDAPI,
		'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
	}
};

//Get data from json-server, Products
async function getProducts() {
    const res = await fetch(url,options)
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function Importacion() {
    const productsJSON = await getProducts()
    const products = productsJSON.result.resultList
    console.log(products)
    return (
    <>
    {/* CONTENIDO */}
    <div className="container contPrincipal mb-5">
        <h2>Scooters ({products.length}) </h2>
        <div className="grid">
        <div className="row mt-3">
            <div className="col-8">
                {/*DESTACADOS TARJETAS*/}
                <div className="d-flex p-2 flex-wrap justify-content-between">
                {
                    products.map(product=>(
                        <ScooterCard key={product.item.itemId} img={product.item.image} modelo={(product.item.title).split(' ').slice(0,2).join(' ')} txt={product.item.title}  id={product.item.itemId}/>
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
                    {/* TOP PRODUCTS */}
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