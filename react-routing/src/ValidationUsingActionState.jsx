
import { useActionState, useEffect } from "react"

function HandleForm() {

    let [data, action, pending] = useActionState(handleformdata)

    async function handleformdata(prevdata, formdata) {
        await new Promise((res) => {
            setInterval(res, 5000)
        })

        let name = formdata.get('name'); 
        let pass = formdata.get('password');
        let regex = /[A-z0-9]+$/i
        let email = formdata.get('email');

        if (name.length > 6) {
            return { error: "enter only 6 character", name, pass, email }
        }
        else if (!regex.test(pass)) {
            return { error2: "enter only a number or character", name, pass, email }
        }
        else if (!email.endsWith("@gmail.com")) {
            return { error3: "enter postprefix in email with @gmail.com", name, pass, email }
        }
        else {
            return { message: "Data Submitted Done", name, pass, email }
        }

    }

    return (
        <>
            <form action={action}>
                <input type="text" name="name"  value={data?.name} placeholder="Enter Your name......" />
                <span style={{color:"red"}}>{data?.error && data?.error}</span>
                <br /><br />
                <input type="password" name="password"  value={data?.pass}  placeholder="Enter Your PassWord......." />
                <span>{data?.error2 && data?.error2}</span>
                <br /><br />
                <input type="text" name="email" value={data?.email} placeholder="Enter Your email" />
                <span style={{color:"red"}}>{data?.error3 && data?.error3}</span>
                <br /><br />
                <button disabled={pending || data?.error ||data?.error2 || data?.error3} >{pending ? "Submitting...." : "Submit"}</button>
                 <span style={{color:"green"}}>{data?.message && data.message}</span>
                <h2>Name:{data?.name}</h2>
                <h2>Email:{data?.email} </h2>
                <h2>Password:{data?.pass}</h2>
            </form>
        </>
    )
}

export default HandleForm