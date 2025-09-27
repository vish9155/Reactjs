// Component-> A component is building block in react. to concate multiple component to make a compelete Application; ex- navbar,slidebar,footer etc;

// there are two types of component in react 1.Functional component-> it is write as normal javascript function it is light-weight  and fast . it recive the props as argument

// 2. class component-> it is write es6 class and use render() for rerendring the state hooks etc 

export default function Demo()
{
    let name="vishal kumar";
    let age=29;
    let course="Bca"
    return(
        <>
        <div>
            <h1>Name:{name}</h1>
            <h1>Age:{age}</h1>
            <h1>Course:{course}</h1>
        </div>
        </>
    )
}