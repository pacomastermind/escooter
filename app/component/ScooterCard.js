import Link from "next/link";

export default function ScooterCard({img,modelo,txt,id}){
    return(
        <div className="card mb-2" style={{ width: "15rem" }}>
            <img
                src={img}
                className="card-img-top p-4"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">{modelo}</h5>
                <p className="card-text text-truncate">
                {txt}
                </p>
                <Link href={"./scooter/" + id} className="btn btn-primary">Más Info</Link>
            </div>
        </div>
    )
}