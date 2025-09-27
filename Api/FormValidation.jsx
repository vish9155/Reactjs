
import { useActionState } from "react";

export default function FormValidation() {

    let [data, action, pending] = useActionState(getdata)

    async function getdata(prev, formdata) {
        await new Promise((res) => {
            setTimeout(res, 5000)
        })
        let name = formdata.get("name")
        let email = formdata.get("email")
        let password = formdata.get("password")
        let regix = /[A-Z0-9]+$/i
        console.log(name, email, password);

        if (name == "" || email == "" || password == "") {
            alert("Enter form data")
        }
        else if (name.length > 6) {
            return { error: "Please enter only 6 character", name, email, password }
        }
        else if (!regix.test(password)) {
            return { error2: "Please enter only number and character", name, email, password }
        }
        else if (!email.endsWith("@gmail.com")) {
            return { error3: "please Enter valid email", name, email, password }
        }
        else {
            return { message: "Data Sucessfully Submitted...", errordata:"Please enter valid data", name, email, password }
        }
    }

    return (
        <>
            <form action={action}>
                <input type="text" name="name" />
                <span style={{ color: "red" }}>{data?.error} </span>
                <br /><br />
                <input type="text" name="password" />
                <span style={{ color: "red" }}>{data?.error2}</span>

                <br /><br />
                <input type="text" name="email" />
                <span style={{ color: "red" }}>{data?.error3}</span>
                <br /><br />
                <button disabled={pending || data?.error || data?.error2 || data?.error3}>{pending ? "submitting...." : "Submit"}</button>
                <span style={{color:"green"}}>{data?.message?data?.message:data?.errordata}</span>
            </form>
            <h2>Name: <span>{data?.name}</span></h2>
            <h2>Email: <span>{data?.email}</span></h2>
            <h2>Password: <span>{data?.password}</span></h2>
        </>
    )
}