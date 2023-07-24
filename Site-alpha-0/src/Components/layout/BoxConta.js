import React from "react";
import "./BoxConta.css"
import { useForm } from "react-hook-form";

function BoxConta({ id, name }) {

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm()



    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div id={id} className="box_conta">
            <h3>{name}</h3>
            <div className="space">
                <input
                    className="input"
                    placeholder="Digite o valor"
                    type="number"
                    {...register("number", { required: true })}
                />
                <button type="primary" onClick={() => handleSubmit(onSubmit)()} >Confirmar</button>
            </div>
            {errors?.name?.type === false &&
                <p>preenchido</p>

            }
        </div>
    )
}



export default BoxConta;
