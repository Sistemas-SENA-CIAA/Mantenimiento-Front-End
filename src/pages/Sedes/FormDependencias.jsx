import { useState } from "react";
import usePostData from "../../hooks/usePostData";
import { Input } from "../../components/forms/elements/input";
import { Button } from "../../components/forms/elements/button";
import { Forms } from "../../layout/Forms";
import { useNavigate } from 'react-router-dom';
import useGetData from "@/hooks/useGetData";

export const FormDependencias = () => {
    const initialData = { codigo: "", nombre: "" };
    const [inputs, setInputs] = useState(initialData);
    const navigate = useNavigate();
    const urls = ["subsedes"];
    const { data, error, loading } = useGetData(urls);

    const inputs1 = [
        { 
            id: 1, 
            type: 'text', 
            name: 'codigo', 
            placeholder: 'Ingrese el código del Area', 
            value: inputs.codigo, 
            required: true 
        },
        { 
            id: 2, 
            type: 'text', 
            name: 'nombre', 
            placeholder: 'Ingrese nombre del Area', 
            value: inputs.nombre, 
            required: true 
        },
    ];

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleFormReset = () => {
        setInputs(initialData);
    };

    const onSubmit = () => {
        handleFormReset();
        navigate("/admin", { replace: true });
    };

    const handleSubmit = usePostData("dependencias", onSubmit, inputs);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Forms>
            <h1 className="text-center my-2 mb-8 text-xl font-semibold">Formulario Subsedes</h1>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-3" onSubmit={handleSubmit}>
                {inputs1.map(input => (
                    <Input key={input.id} type={input.type} name={input.name} placeholder={input.placeholder} required={input.required} value={input.value} handleInputChange={handleInputChange} />
                ))}
                <Select
                    label="Subsedes"
                    name="Subsede"
                    value={inputs.subsede}
                    onChange={handleInputChange}
                    options={data.subsedes.map(subsede => ({ value: subsede.id, label: subsede.nombre }))}
                />
                <div className={inputs1.length % 2 === 0 ? "md:col-span-2" : "flex items-center justify-center mt-6"}>
                    <Button type={'submit'} name={'Enviar'} />
                </div>
            </form>
        </Forms>
    );
};