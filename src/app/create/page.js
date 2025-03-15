"use client"
import { useRouter } from "next/navigation";
const API_URL = process.env.NEXT_PUBLIC_API_URL;


export default function Craete(){
    const router = useRouter();
    return (
        <>
        <h2>추가 💡</h2>
        <form onSubmit={(event)=>{
            event.preventDefault();
            const title = event.target.title.value;
            const year = event.target.year.value;
            const desc = event.target.desc.value;
            const options = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({title, year, desc})
            }
            fetch(`${API_URL}/movies`, options)
            .then(resp=>resp.json())
            .then(result=>{
                console.log(result.id);
                router.push(`/read/${result.id}`);
            })
            .catch(error => console.error(error))
            
        }}>
            <p><input
            type="text" 
            className="input-line"
            name='title' 
            placeholder="제목을 입력하세요."
            ></input></p>
            
            <p><input 
            type="text" 
            className="input-line"
            name='year' 
            placeholder="개봉 연도를 입력하세요."
            ></input></p>

            <p><textarea 
            name='desc' 
            className="input-line"
            placeholder="간단한 영화 설명을 입력하세요."
            ></textarea></p>
            
            <p><input 
            type='submit'
            ></input></p>
        </form>
        </>
    )
}