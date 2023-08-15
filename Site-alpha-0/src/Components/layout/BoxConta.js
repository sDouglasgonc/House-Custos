import React, { useState } from "react";
import "./BoxConta.css";
import { useForm } from "react-hook-form";

function BoxConta({ id, name, onFill }) {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const [showMessage, setShowMessage] = useState(false);

    const onSubmit = (data) => {
        if (!data.number) {
            setShowMessage(false);
            return;
        }

        console.log(data);
        setShowMessage(true);
        reset();
        if (onFill) {
            onFill(data.number)
        }
    };

    return (
        <div id={id} className="box_conta">
            <h3 className="title">{name}</h3>
            <div className="space">
                {!showMessage && (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="input"
                            placeholder="Digite o valor"
                            type="number"
                            step="any"
                            {...register("number", { required: "Campo obrigatório" })}
                        />
                        {errors.number && !showMessage && (
                            <p className="error-message">{errors.number.message}</p>
                        )}
                        <button type="submit" className="btn_form">
                            Confirmar
                        </button>
                    </form>
                )}

                {showMessage && !errors.number && (
                    <p className="message">Preenchido!!</p>
                )}
            </div>
        </div>
    );
}

export default BoxConta;
