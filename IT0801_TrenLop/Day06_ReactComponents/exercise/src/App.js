import logo from './logo.svg';
import './App.css';
import AlertComp from './components/AlertComponent';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <AlertComp className ="alert alert-warning" role = "alert" text = "Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại"></AlertComp>
  );
}

export default App;
