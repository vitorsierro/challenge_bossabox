import { GlobalContext } from "../Context/GlobalContext";
import NotationBox from "../components/NotationBox";
import SearchBox from "../components/SearchBox";
import Headers from "../components/Header/Headers";
import 'antd/dist/antd.css';
import { Layout } from "antd";
import Cabecalho from "../components/cabecalho/cabecalho";

const { Content } = Layout;

export default function Home() {
  return (
    <GlobalContext>
      <Cabecalho />
      <Layout className="layout" style={{background:'none'}}>
          <Headers />
        <Content style={{ padding: "1rem 3rem" }}>
          <SearchBox />
          <NotationBox />
        </Content>
      </Layout>
    </GlobalContext>
  );
}
