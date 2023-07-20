import { InputNumber, Space, Button } from "antd"
import "../box/MainBox.css"

const onChange = function (value) {
    console.log('changed', value)
}


function MainBox(id, name, input) {
    return (

        <div id={id} className="box_conta" >
            <h3 htmlfor={name}>{name}</h3>
            <Space>
                <InputNumber
                    input={input}
                    defaultValue={400}
                    max={400}
                    formatter={(value) => `R$ ${value}`.replace(/\B(?=(\d{2})+,+(?!\d))/g, ',')}
                    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={onChange}
                    size="middle"
                />
                <Button type="primary">Primary Button</Button>
            </Space>
        </div>
    )
}
export default MainBox;