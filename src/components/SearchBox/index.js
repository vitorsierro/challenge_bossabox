import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/GlobalContext";
import Modal from "../Modal";

import { Input, Space, Switch, Row, Button } from 'antd';

const { Search } = Input;

export default function SearchBox() {
  const global = useContext(Context);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const onSearch = value => Pesquisar(value);
  
  function Pesquisar (value){
    global.adicionarValor(value)
    global.adicionarIsChecked(isChecked)
  }

  return (
    <Row>
      <Space direction="horizontal">
        <Search
          placeholder="input search text"
          enterButton
          onSearch={onSearch}
          onClick={(event) => (event.preventDefault())}
          style={{marginLeft:'2rem'}}
          
        />
         <Switch
          checked={isChecked}
          checkedChildren="Apenas tags"
          unCheckedChildren="Qualquer palavra"
          onChange={() => {
            setIsChecked(!isChecked);
          }}
          style={{marginLeft:'3rem'}}
        />
        </Space>
      <Button danger 
      onClick={() => {setIsModalVisible(true);}}
      style={{ marginLeft: 'auto', marginRight: '2rem'}}>+ Add</Button>

      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)} />
      ) : null}
    </Row>
  );
}
