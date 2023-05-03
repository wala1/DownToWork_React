import axios from 'axios';
import React,{useState,useRef} from 'react';
function Test() {
    const [fullName, setFullName] = useState("")
    const [isUploaded, setIsUploaded] = useState(false)
    const [serverData, setServerData] = useState({})
    const formRef = useRef(null)
    const onChangeFullName = (evt) => {
        // console.log("onChangeFullName evt", evt)
        setFullName(evt.target.value)
    }
    const onSubmit = async (evt) => {
        evt.preventDefault()
    
        if (!formRef) {
          return
        }
    
        // fetch(url, { method, body })
        // document.querySelector('form').action
        const response = await fetch(formRef.current.action, {
          method: formRef.current.method,
          body: new FormData(formRef.current)
          
        })
        console.log(response.url);
        console.log(response);
        const json = await response.json()
        console.log("json", json)
    
        setServerData(json)
        setIsUploaded(true)
      }
    
      if (isUploaded) {
        return (
          <div className="App">
            <h1>La photo de vacances de : {serverData.fullName}</h1>
            <Binary src={serverData.asset} filetype={serverData.filetype} />
          </div>
        )
    
    }
    return (
        <div className="App">
          <h1>Mes photos de vacances</h1>
          <form ref={formRef} action="courses/upload" method="POST" onSubmit={onSubmit}>
            <div className="form-group">
              <label for="fullname-upload">Nom</label>
              <input
                id="fullname-upload"
                type="text"
                name="fullname"
                onChange={onChangeFullName}
                value={fullName}
              />
            </div>
            <div className="form-group">
              <label for="file-upload">Uploader fichier</label>
              <input id="file-upload" type="file" name="asset" />
            </div>
            <button type="submit">Envoi</button>
          </form>
        </div>
      )

}
function Binary({ src, filetype }) {
    if (filetype === "pdf") {
      return (
        <iframe
          src={`http://localhost:3001/${src}`}
          frameBorder="0"
          height="500"
          width="300"
        ></iframe>
      )
    }
  
    return <img src={src} />
}
export default Test;
