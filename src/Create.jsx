import {useState} from 'react'

const Create = ()=> {
    const [formData,setAgain] = useState({title:"",body:"",author:""})
    function setChange(event){
        console.log(event)
        const {name, value} = event.target
        setAgain(prevFormData => {
            return {
               ...prevFormData,[name]: value
         
    }})
}
function handleSubmit(event){
    event.preventDefault()
    console.log(formData)
}
    return (
       <div className="text-center">
        <h2>Add a New Blog</h2>
        <form className="  flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <label >Blog title:</label>
            <input className="ml-5 w-40 py-10  block border  border-black"
            type = "text"
            required
             name= "title"
            value ={formData.title}
            onChange ={setChange}/>
            <label>Blog body:</label>
            <textarea  className="ml-5 w-40 py-10  block border  border-black"
            required
            name= "body"
            value ={formData.body}
            onChange ={setChange}></textarea>
            <label >Blog author:</label>
            <select className="p-5"
            name = "author"
            value ={formData.author}
            onChange ={setChange}>
                 <option value ='Choose'>--Choose--</option>
                <option value ='Mario'>Mario</option>
                <option value ='Yoshi'>Yoshi</option>
            </select>
            <button className="px-4 py-6 bg-red-500">Submit</button>
            <p>{formData.title}</p>
            <p>{formData.body}</p>
            <p>{formData.author}</p>
        </form>
       </div> 
    )
}
export default Create