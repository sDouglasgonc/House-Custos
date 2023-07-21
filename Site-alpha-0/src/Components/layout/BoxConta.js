import React from "react";
import { InputNumber, Space, Button } from "antd"
import "./BoxConta.css"
import { useNavigate } from "react-router-dom";

const onChange = function (value) {
    console.log('changed', value)
}

function BoxConta({ id, name }) {

    const history = useNavigate()

    function createConta(conta) {
        conta.value

        fetch("http://localhost:5000/Contas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(conta)
        }).then((resp) => resp.json)
            .then((data) => {
                console.log(data)
                //redirect
            })
            .catch((err) => console.log(err))
    }


    return (
        <div id={id} className="box_conta">
            <h3>{name}</h3>
            <Space className="space">
                <InputNumber
                    className="input"
                    defaultValue={400}
                    max={400}
                    formatter={(value) => `R$ ${value}`.replace(/\B(?=(\d{2})+,+(?!\d))/g, ',')}
                    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={onChange}
                />
                <Button type="primary" handleSubmit={createConta}>Confirmar</Button>
            </Space>
        </div>
    )
}



export default BoxConta;
