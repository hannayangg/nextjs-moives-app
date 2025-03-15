"use client"
import { useRouter } from "next/navigation";
import { use, useState, useEffect } from "react";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Update({params}){
    const router = useRouter();
    const {id} = use(params);
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [desc, setDesc] = useState('');
    useEffect(()=>{
        fetch(`${API_URL}/movies/${id}`)
        .then(resp => resp.json())
        .then(result => 
            {console.log(result)
            setTitle(result.title);
            setYear(result.year);
            setDesc(result.desc);
            })
        }, []);

    return (
        <>
        <h2>수정 ✍️</h2>
        <form onSubmit={(event)=>{
            event.preventDefault();
            const options = {
                method: "PATCH",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({title, year, desc})
            }
            fetch(`${API_URL}/movies/${id}`,options);
            router.push(`/read/${id}`);
            
        }}>
            <p><input 
            type="text" 
            className="input-line"
            name='title' 
            value={title} 
            onChange={(event)=>{setTitle(event.target.value)}}
            ></input></p>
            
            <p><input 
            type="text" 
            className="input-line"
            name='year' 
            value={year} 
            onChange={(event)=>{setYear(event.target.value)}}
            ></input></p>

            <p><textarea 
            name='desc' 
            className="input-line"
            value={desc} 
            onChange={(event)=>{setDesc(event.target.value)}}
            ></textarea></p>

            <p><input type='submit'></input></p>
        </form>
        </>
    )
}