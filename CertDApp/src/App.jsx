import { useState } from 'react';
import { Contract, BrowserProvider } from 'ethers';
import { abi, contractAddress } from './Cert.json';

function App() {
  const [output, setOutput] = useState('');
  const [queryID, setQueryID] = useState(0);
  const [Data, setData] = useState({
    id: 0,
    name: '',
    course_no: '',
    grade: '',
    date: '',
  });

  const provider = new BrowserProvider(window.ethereum);

  const connectMetamask = async () => {
    const signer = await provider.getSigner();
    alert(`Connected to Metamask with address: ${signer.address}`);
  };

  const resetData = () => {
    setData({
      id: 0,
      name: '',
      course_no: '',
      grade: '',
      date: '',
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const signer = await provider.getSigner();
    const instance = new Contract(contractAddress, abi, signer);

    const trx = await instance.issue(
      Data.id,
      Data.name,
      Data.course_no,
      Data.grade,
      Data.date
    );

    console.log('Transaction Hash:', trx.hash);
  };

  const getCertificate = async () => {
    const signer = await provider.getSigner();
    const instance = new Contract(contractAddress, abi, signer);

    const result = await instance.getCertificate(queryID);
    if (result) {
      setOutput(`
        Name: ${result[0]}
        Course No: ${result[1]}
        Grade: ${result[2]}
        Date: ${result[3]}
      `);
    }
  };

  return (
    <>
      <h1> IITK Certificates</h1>
      <button onClick={connectMetamask}> Connect to Metamask </button>
      <div className="container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label>ID:</label>
              <input
                type="number"
                value={Data.id}
                onChange={(e) => setData({ ...Data, id: e.target.value })}
              />
              <br />
              <label>Name:</label>
              <input
                type="text"
                value={Data.name}
                onChange={(e) => setData({ ...Data, name: e.target.value })}
              />
              <br />
              <label>Course No:</label>
              <input
                type="text"
                value={Data.course_no}
                onChange={(e) =>
                  setData({ ...Data, course_no: e.target.value })
                }
              />
              <br />
              <label>Grade:</label>
              <input
                type="text"
                value={Data.grade}
                onChange={(e) => setData({ ...Data, grade: e.target.value })}
              />
              <br />
              <label>Date:</label>
              <input
                type="date"
                value={Data.date}
                onChange={(e) => setData({ ...Data, date: e.target.value })}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
              <button type="button" onClick={resetData}>
                Reset
              </button>
            </div>
          </form>
        </div>

        <div className="form-container">
          <form>
            <div>
              <label> ID: </label>
              <input
                type="number"
                value={queryID}
                onChange={(e) => setQueryID(e.target.value)}
              />
            </div>
          </form>
          <button onClick={getCertificate}> Get Certificate </button>
          <pre>{output}</pre> 
        </div>
      </div>
    </>
  );
}

export default App;
