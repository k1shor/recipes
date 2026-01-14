import MyButton from "./MyButton"

const Person = ({name, address, phone}) => {
// const Person = (props) => {
    // props - {name: "RAM", address: "Kathmandu", phone: "9876543212"}
    // let name = props.name
    // let address = props.address
    // let phone = props.phone

    // destructuring object
    // let {name, address, phone} = props

    return (<div className="my-5 shadow-lg p-5">
        <h1>Name: {name}</h1>
        <h2>Address: {address}</h2>
        <h2>Phone: {phone} </h2>
        <MyButton text={'View Details'} color={'green'} bgcolor={'yellow'}></MyButton>
        <MyButton></MyButton>
    </div>)
}

export default Person