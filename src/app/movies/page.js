"use client"
import { useEffect, useState } from "react"
import Link from "next/link";
import { useRouter } from "next/navigation";
const API_URL = process.env.NEXT_PUBLIC_API_URL;


export default function List(){
    const [movies, setMovies] = useState([]);
    const router = useRouter();

    useEffect(()=>{
        fetch(`${API_URL}/movies`)
        .then(resp => resp.json())
        .then(result=>setMovies(result))
        .catch(error => console.error(error));
    }, [])

    const handleOnClick = async (id)=>{
        if (!confirm("정말 삭제하겠습니까?")) return;

        try {
          await fetch(`${API_URL}/movies/${id}`, {method:"DELETE"});
        
          // 삭제 후 setMovies 상태를 업데이트
          // 삭제된 id 를 제외한 새로운 리스트로
          
          setMovies(movies.filter(movies=>movies.id !== id))
          
        } catch (error) {
          console.log("삭제 실패!", error)
        }
      };

    return (
        <>
        {movies.map(movie => 
        (<div key={movie.id} className="movie-container">
            <Link href={`/read/${movie.id}`}>
                <div className="movie-btn">
                {movie.title} - {movie.year}
                </div>
            </Link>

            <button className="delete-btn" onClick={()=> {
                handleOnClick(movie.id);
            }}>🗑️</button>{/* 삭제 버튼은 Link 밖으로!!*/}

        </div>)
            
        )}
        </>
    )
}