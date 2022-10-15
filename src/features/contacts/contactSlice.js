import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    name: "contacts",
    contacts: {
        name: "Գրիգոր",
        lastName: "Պալոյան"
        
    },
    socilaSite:[
        {
            site: "Facebook",
            url: "https://www.facebook.com/GrigorPaloyann/",
            icon: "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
        },
        {
            site: "Linkedin",
            url: "https://www.linkedin.com/in/grigor-paloyan-087435189/",
            icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png"
        },
        {
            site: "Email",
            url: "https://www.facebook.com/GrigorPaloyann/",
            icon: "https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png"
        },
        {
            site: "Gmail",
            url: "https://www.facebook.com/GrigorPaloyann/",
            icon: "https://iconarchive.com/download/i58923/wwalczyszyn/android-style-honeycomb/GMail.ico"
        }
    ],

    address: {
        Age: 26,
        City: "Artik",
        Country: "Armenia",
        Address: "c. Artik str. Kamoyi 131",
        Email: "grigorpaloyan@gmail.com",
        Phone: 37477053132,

        
    },
    photos: {
        big : "https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/d/1/d134609c5a6697572db3cb9851517b5f2f8159d00a23c30b706e48e8281e8ac5/admin-icons-slide.png",
        small: "https://scontent.fevn7-1.fna.fbcdn.net/v/t1.18169-9/18222139_690618034457638_3188207596316748639_n.jpg?stp=c0.36.247.247a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=p6NEO4S1zykAX-ZUMNY&tn=HjyHOE9UNSDsifVS&_nc_ht=scontent.fevn7-1.fna&oh=00_AT_0MknUlbw1aEdlx_pbDaV0micE-hzKM60VXUw-MigA3Q&oe=636934C0"
    },
    about: {
        text1: "Notice the use of in the tags above. It will be replaced with the URL of the `public` folder during the build. Only files inside the `public` folder can be referenced from the HTML. Unlike /favicon.ico or favicon.ico, %PUBLIC_URL%/favicon.ico will    work correctly both with client-side routing and a non-root public URL Learn how to configure a non-root public URL by running `npm run build`.",
        text: "I have different professions but l like web-programming more. I studied myself (HTML, CSS, JavaScript, React, Redux) but I would like to deepen my knowledge in the training center to specialize.",
        dcide: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit saepe sapiente, nisi doloremque labore perspiciatis! Officiis quasi eos aperiam et nam recusandae officia fuga accusantium, aliquid corporis maiores distinctio in ex assumenda ratione minima, enim tenetur perspiciatis sint. Quaerat dolores, labore voluptatibus totam et optio quisquam, in unde debitis magnam dicta iste quo eligendi repudiandae architecto delectus ea eius cum rerum veritatis asperiores aspernatur! Dolore minima est exercitationem repellat! Deleniti laborum doloremque tempore ab neque suscipit quo alias voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit saepe sapiente, nisi doloremque labore perspiciatis! Officiis quasi eos aperiam et nam recusandae officia fuga accusantium, aliquid corporis maiores distinctio in ex assumenda ratione minima, enim tenetur perspiciatis sint. Quaerat dolores, labore voluptatibus totam et optio quisquam, in unde debitis magnam dicta iste quo eligendi repudiandae architecto delectus ea eius cum rerum veritatis asperiores aspernatur! Dolore minima est exercitationem repellat! Deleniti laborum doloremque tempore ab neque suscipit quo alias voluptatum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit saepe sapiente, nisi doloremque labore perspiciatis! Officiis quasi eos aperiam et nam recusandae officia fuga accusantium, aliquid corporis maiores distinctio in ex assumenda ratione minima, enim tenetur perspiciatis sint. Quaerat dolores, labore voluptatibus totam et optio quisquam, in unde debitis magnam dicta iste quo eligendi repudiandae architecto delectus ea eius cum rerum veritatis asperiores aspernatur! Dolore minima est exercitationem repellat! Deleniti laborum doloremque tempore ab neque suscipit quo alias voluptatum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit saepe sapiente, nisi doloremque labore perspiciatis! Officiis quasi eos aperiam et nam recusandae officia fuga accusantium, aliquid corporis maiores distinctio in ex assumenda ratione minima, enim tenetur perspiciatis sint. Quaerat dolores, labore voluptatibus totam et optio quisquam, in unde debitis magnam dicta iste quo eligendi repudiandae architecto delectus ea eius cum rerum veritatis asperiores aspernatur! Dolore minima est exercitationem repellat! Deleniti laborum doloremque tempore ab neque suscipit quo alias voluptatum?"
    }
    ,
    email: "mailto: grigorpaloyan@gmail.com",
    number: "tel:+37477053132"
    
}
const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers:{

    }
})
export const contactSelector = (state) => state.contacts
export default contactSlice.reducer