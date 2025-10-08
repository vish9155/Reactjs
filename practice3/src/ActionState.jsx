import { useEffect } from "react";
import { useActionState } from "react"

export default function FormDataHAndle() {

    let [data, action, pending] = useActionState(getdata)


    async function getdata(prev, formdata) {
        await new Promise((res) => {
            setInterval(res, 2000)
        })
        let name = formdata.get("name")
        let password = formdata.get("password");
        let gmail = formdata.get("email");
        let regex = /[A-Z0-9]+$/i

        console.log(name, password, gmail)
        if (name == '' || password == "" || gmail == "") {
            alert("Please fill the form data")
        }
        else if (name.length > 6) {
            return { nameError: "please enter only 6 chaacter username", name, password, gmail }
        }
        else if (!regex.test(password)) {
            return { passError: "please enter only number and chaacter ", name, password, gmail }
        }
        else if (!gmail.endsWith("@gmail.com")) {
            return { gmailError: "please enter only this format @gmail.com after your email id ", name, password, gmail }
        }
        else {
            return {
                message: "Data is Sucessfully Submitted......"
            }
        }
    }

    return (
        <>
            <form action={action}>
                <input type="text" name="name" placeholder="UserName......." />
                <div style={{color:"red"}}>{data?.nameError}</div>
                <br /><br />
                <input type="text" name="password" placeholder="Password...." />
                <div style={{color:"red"}}>{data?.passError}</div>
                <br />
                <br />
                <input type="text" name="email" placeholder="Email......" />
                <div style={{color:"red"}}>{data?.gmailError}</div>
                <br /><br />
                <button disabled={pending || data?.nameError || data?.gmailError || data?.passError}>{pending ? "submitting" : "submit"}</button>
                <div style={{color:"green"}}>{data?.message }</div>
            </form>
            <div>
                <h3>Name:{data?.name}</h3>
                <h3>Password:{data?.password}</h3>
                <h3>Gmail:{data?.gmail}</h3>

            </div>
        </>
    )
}