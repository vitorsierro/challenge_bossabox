import React, { useEffect, useState } from "react";
import { busca, buscarTudo, buscarTag, deletePost } from "../../pages/api/tools";
import { Context } from "../../Context/GlobalContext";

import { Typography, Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import styles from "../../styles/NotationItem.module.css";

const { Title, Text, Paragraph, Link } = Typography;


export default function NotationItem() {
  const global = React.useContext(Context);
  const [dados, setDados] = useState({});

  useEffect(() => {
    if (dados.length === undefined ) {
      busca(setDados);
    } else {
      if (global.isChecked === true) {
        buscarTag(global.valor, setDados);
      } else {
        buscarTudo(global.valor, setDados);
      }
    }
    
  }, [global.isChecked,global.valor]);

  function handleClick(event, id) {
    event.preventDefault();
    deletePost(id);
    window.location.reload()
  }
  
  
  return (
    <>
        {dados.length !== undefined &&
          dados.map(({ id, link, title, tags, description }) => (
            <Link key={id} href={link} target="_blank">
            <form  className={styles.Form}>
              <header className={styles.Header}>
                <Title level={2}>{title}</Title>
                  <Button type="text" danger 
                  shape="circle"  size='large'
                  icon={<CloseCircleOutlined />}
                  style={{zIndex:1}}
                  onClick={(event) => handleClick(event,id)} />
              </header>
              <main>
                <Paragraph type="secondary">{description}</Paragraph>
              </main>
              <footer>
                <Text strong>{(tags !== undefined) &&tags.map((tag) => `#${tag.toString().toUpperCase()} `)}</Text>
              </footer>
            </form>
            </Link>
          ))}  
    </>
  );
}
