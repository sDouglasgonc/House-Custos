
import MainBox from "../box/MainBox";


function BoxConta() {

    {/* const [inputBox, setInputBox] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/InputBox", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((resp) => resp.json)
            .then((data) => {
                setInputBox(data)
            })
            .catch((err) => console.log(err))
    }, [])
*/}


    return (
        <MainBox id="id" name="name" input="input" />
    )
}



export default BoxConta;
