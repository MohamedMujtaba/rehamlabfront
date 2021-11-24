import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./TestRes.css";
import { AiOutlinePrinter } from "react-icons/ai";
import FloatButton from "../../components/FloatButton/FloatButton";
import DisplayText from "./DisplayText";
import { Top, Dit, Table, TableRow, Block, Footer } from "./TestResStyle";
import { FcEditImage } from "react-icons/fc";
import Loading from "../../components/Loading/Loading";

const TestRes = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [tests, setTests] = useState([]);
  const [resID, setResID] = useState("");
  const [loading, setLoading] = useState(true);

  const getRes = async () => {
    try {
      const res = await fetch(
        `https://reham-api-v1.herokuapp.com/api/v1/results/${id}`
      );
      const data = await res.json();
      setUser(data.user);
      setTests(data.tests);
      setResID(data._id);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getRes();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="test-res" id="ts">
          <FloatButton
            onClick={() => window.print()}
            att={"button"}
            icon={<AiOutlinePrinter />}
            content={"Print"}
          />
          <FloatButton
            icon={<FcEditImage />}
            att={"Link"}
            to={`/updateres/${resID}`}
            left={"10%"}
            content={"Edit"}
          />
          <Top>
            <div>
              <h4> معمل رهام الطبي</h4>
              <h4> عطبره شارع الدكاتره</h4>
              <h4> 0912345678</h4>
            </div>
            <div>
              <h1
                style={{
                  marginRight: "2rem",
                }}
              >
                Logo
              </h1>
            </div>
          </Top>
          <Dit>
            <p>
              <b>Name:</b> {user.name}
            </p>
            <p>
              <b>Number:</b> 0{user.phone}
            </p>
            <p>
              <b>Gender:</b> {user.gender}
            </p>
            <p>
              <b>age</b>: {user.age}
            </p>
          </Dit>
          <Table>
            <TableRow>
              <p style={{ textAlign: "start", width: "50%" }}>
                <b>Test Name</b>
              </p>
              <p>
                <b>Normal</b>
              </p>
              <p>
                <b>Result</b>
              </p>
            </TableRow>
            <>
              {tests.map((test) => {
                return (
                  <Block>
                    <TableRow>
                      <p style={{ textAlign: "start", width: "50%" }}>
                        {test.testName}
                      </p>
                      <p>{test.normal}</p>
                      <p>{test.result}</p>
                    </TableRow>
                    {test.comment && <DisplayText text={test.comment} />}
                  </Block>
                );
              })}
            </>
          </Table>
          {/* <Footer>
            <p>لسنا الوحيدون لكننا الافضل</p>
              <p>0901459802 - 0901459802 </p> 
          </Footer> */}
        </div>
      )}
    </>
  );
};

export default TestRes;
