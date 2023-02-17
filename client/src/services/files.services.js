import axios from "axios";

const endpoint = "http://localhost:5000/api/files";

class FileServices {
  readCsvFile() {
    return axios.get(`${endpoint}/read-csv`);
  }

  readPrnFile() {
    return axios.get(`${endpoint}/read-prn`);
  }
}

export default new FileServices;