export default function ArrayObject() {

    let arr = ['vishal', 'kushal', 'naresh', 'sudhir', 'gopal', 'abhinav', 'raja', 'damu']
    let arr2 = [{ name: "vishal", age: "20" }, { name: "akash", age: "23" }, { name: "ram", age: "25" }]
    let obj = {

        name: "vishal",
        age: 20,
        course: "mca",
        city: "hajipur",
        address: {
            address1: {
                state: {
                    statename: "bihar"
                }
            },
            address2: {

                block: "hajipur",
                pin: 844502,
                dist: "vaishali"

            }
        }
    }

    return (
        <>
            <h2>{arr[0]}</h2>
            <h2>{arr[1]}</h2>
            <h2>{arr[2]}</h2>
            <h2>{arr[3]}</h2>
            <h2>{arr[4]}</h2>
            <h3>name:{obj.name}</h3>
            <h3>age:{obj.age}</h3>
            <h3>course:{obj.course}</h3>
            <h3>City:{obj.city}</h3>
            <h3>State:{obj.address.address1.state.statename}</h3>
            <h3>Block:{obj.address.address2.block}</h3>
            <h3>District:{obj.address.address2.dist}</h3>
            <h3>Pin:{obj.address.address2.pin}</h3>
            <h2>
                ArrData:{
                    arr.map((item, index) => {
                        return (
                            <div key={index}>{item}</div>
                        )
                    })
                }

            </h2>
            <div>
                {
                    arr2.map((item2, index1) => {
                        return (
                            <div key={index1}>
                                {item2.name}
                                {item2.age}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}