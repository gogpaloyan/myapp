
import { useSelector } from "react-redux"
import { contactSelector } from "../../../contacts/contactSlice"
import s from './contact.module.css'
import TextCount from "./TextCount"

function Contact({value}){
function ggg(contacts){
    return Object.keys(contacts).map((item) => {
        return (
            <div key={Math.random()} className={value ? s.data : s.Data}>
                <span>{item} </span>
                <span>{contacts[item]}</span>
            </div>
        )
    })
}


    const contacts = useSelector(contactSelector)
    const data = ggg(contacts.address)
    const contact = Object.values(contacts.contacts).map((item) => <span key={Math.random()}> {item}</span>)
    const photos = contacts.photos
    const socilaSite = contacts.socilaSite.map((item) => {
        return(
            <span key={Math.random()} className={value ? s.social : s.Social}>
                <a href={item.url}><img alt="" src={item.icon}/></a>
            </span>
        )
    })



    return(
    <div className={value ? s.contact : s.Contact}>
   
        <div >
            
            <div className={s.contacts}>
                <div className={s.profile}>
                    <div>
            <img className={s.smilePhoto} alt="" src={photos.small} /></div>
            <div className={value ? s.name : s.Name}> {contact}</div>
            </div>
                <div className={s.profile}>
                    
                    <div className={value ? s.icon : s.Icon}>{socilaSite} </div>
               </div>
             
            <div className={s.text} >
                <TextCount value={value} text={contacts.about.dcide} max={220}/>
                </div>
            
        </div>

        
        </div>
        
        <div><div>
            <div className={value ? s.about : s.About}>{contacts.about.text}
        </div>
            
        <div className={value ? s.emaild : s.Emaild}> {data}</div>
         
            <a className={value? s.email : s.Email} href={contacts.number}><span>&#9990; </span>Call me</a>
            <a className={value? s.email : s.Email} href={contacts.email} > <span>&#9993; </span>my email</a>
        </div>
       <TextCount value={value} text={contacts.about.text1} max={80}/></div>



    </div>
 )
}

export default Contact


/*
<div >
   
     
   
       
           
   
         
</div> */