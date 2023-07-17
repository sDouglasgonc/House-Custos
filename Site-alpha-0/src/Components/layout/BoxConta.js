import React from "react";
import "./BoxConta.css"
import {InputNumber, Space, Button } from "antd"

const onChange = function(value){
    console.log('changed',value)
}

function BoxConta(){
return(
    <div className="box_conta">
        <h3>Conta de Água</h3>
        
    <Space>
 <InputNumber
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
export default BoxConta;