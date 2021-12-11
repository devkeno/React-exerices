import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const[title,setTitle]= useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('yoshi');
    const[isPending, setIsPending]=useState(false);
    const history=useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const blog={title,body,author};
        console.log(blog)
        fetch('http://localhost:3000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added");
            setIsPending(false);
            history.push('/');
        })
    }


return(<div className="create">
<h2>Add new blog</h2>
    <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input required value={title} onChange={((e)=>setTitle(e.target.value))}/>
        <label>Author:</label>
        <select value={author} onChange={((e)=>setAuthor(e.target.value))}>
            <option value="mario">Mario</option>
            <option value="yoshi">Yoshi</option>
        </select>
        <label>Blog body:</label>
        <input required value={body} onChange={((e)=>setBody(e.target.value))}/>
        {!isPending && <button type="submit" className="submit">Add blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
    </form>


</div>)
}
export default Create;