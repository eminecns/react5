import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBBtn,
    
} from 'mdb-react-ui-kit';
import './App.css';


function App() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    const [veri, setVeri] = useState("");
    const [id, setId] = useState(0);
   


    useEffect(() => {
        
        getValueUser();
        
       
    }, [])

   
    const getValueUser = async () => {
        var res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        console.log("RES: " + JSON.stringify(res['data']));
        setData(res['data']);
    }


    return (

        
        <MDBContainer>
            <form style={{
                margin: "auto",
                padding: "15px",
                maxWith: "400",
                alignContent: "center"
            }}
            >
                <label>BAŞLANGIÇ</label>
                <input type="number" inputMode={'numeric'} onChange={(e) => {
                    if(e.target.value.length === 0){
                        setValue(0)
                    }else{
                        setValue(e.target.value)
                    }
                }}/>
                <label>BİTİŞ</label>
                <input type="number" inputMode={'numeric'} onChange={(e) => {
                    if(e.target.value.length === 0){
                        setValue2(0)
                    }else{
                        setValue2(e.target.value)
                    }
                }}/>
               
                <MDBBtn>
                    SIFIRLA
                </MDBBtn>
                <h2>{veri}</h2>


            </form>
            <div style={{marginTop: "100px"}}>
                <h2 className='text-center'>
                </h2>

                <h2>TABLO</h2>
                <MDBRow>
                <MDBTable>
                    <MDBTableHead dark>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">userId</th>
                            <th scope="col">title</th>
                            <th scope="col">completed</th>
                           
                        </tr>
                    </MDBTableHead>
                </MDBTable>
                            {data.length === 0 ? (
                                <MDBTableBody className="align-center mb-0">
                                    <tr>
                                        <td colSpan={8} className="text-center mb-0">İsim bulunamadı</td>
                                    </tr>
                                </MDBTableBody>
                            ) : (
                                data.map((item, index) => (value === 0 || value2 === 0) ? (
                                        <MDBTableBody key={index}>
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <th>{item.userId}</th>
                                                <th>{item.title}</th>
                                                <th>{item.completed.toString()}</th>
                                            </tr>
                                        </MDBTableBody>

                                    ) :
                                    (index +1 <= value2 && index+1>= value) ?
                                    <MDBTableBody key={index}>
                                        <tr>
                                            <th scope="row">{index+1 }</th>
                                            <th>{item.userId}</th>
                                            <th>{item.title}</th>
                                            <th>{item.completed.toString()}</th>
                                        </tr>
                                    </MDBTableBody>:null)
                            )}
                        </MDBTable>
                    </MDBCol>
                </MDBRow>
            </div>
        </MDBContainer>
    );
}


export default App;
