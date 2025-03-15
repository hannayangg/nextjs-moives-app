import Link from "next/link";
const API_URL = process.env.NEXT_PUBLIC_API_URL;


export default async function Read({params}){
    const {id} = await params;
    const resp = await fetch(`${API_URL}/movies/${id}`);
    const movie = await resp.json();
    
    return (
        <>
        <h2 className="read-container">{movie.title}</h2>
        <p className="read-container">{movie.year}</p>
        <p className="read-container"
        style={{lineHeight: "1.6"}}
        >{movie.desc}</p>
        <Link href={`/update/${movie.id}`}>👉 수정하기</Link>
        </>
    )
}