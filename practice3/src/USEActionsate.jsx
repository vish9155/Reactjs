
import { useActionState, useEffect } from "react"

export default function HandleForm() {
    let [data, action, pending] = useActionState(formhandler)

    async function formhandler(prev, formdata) {

        await new Promise((res)=>{setInterval(res,2000)})

        let name = formdata.get('name');
        let password = formdata.get("password")
        let email = formdata.get("email");
        let regex = /[A-z0-9]+$/i
        console.log(name, password, email)

        if (name == " " || password == "" || email == "") {
            alert('please enter a form data')
        }
        else if (name.length > 8) {
            return { error: "Plaese enter only 8 character ", name, password, email }
        }
        else if (!regex.test(password)) {
            return { error1: "Plaese enter only number and character ", name, password, email }
        }
        else if (!email.endsWith("@gmail.com")) {
            return { error3: "Plaese enter valid mail id  ", name, password, email }
        }
        else {
            return { message: "Data is Sucessfully Submitted", name, password, email }
        }
    }


    

    return (
        <>
            <form action={action}>
                <input type="text" name="name" />
                <span style={{ color: "red" }}>{data?.error && data?.error}</span>
                <br /><br />
                <input type="text" name="password" />
                <span style={{ color: "red" }}>{data?.error1}</span>
                <br /><br />
                <input type="text" name="email" />
                <span style={{ color: "red" }}>{data?.error3}</span>
                <br /><br />
                <button disabled={pending || data?.error || data?.error1 || data?.error3}>{pending ? "submitting" : "submit"}</button>
                 <span style={{color:"green"}}>{data?.message}</span>
            </form>
            <h3>Name:{data?.name}</h3>
            <h3>Password:{data?.password}</h3>
            <h3>Gmail:{data?.email}</h3>
        </>
    )
}