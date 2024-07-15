
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './Components/Home/Login';
import FeedbackForm from './Components/GiveFeedback/FeedbackForm';
import TrainingCoordinator from './Components/Trainingcoordinator/TrainingCoordinator';
import AddnewCourse from './Components/Trainingcoordinator/AddnewCourse';
import PrivateRoutes from './Components/PrivateRoutes';
import IqaDashboard from './Components/IQA/IqaDashboard';
import CompltedCourse from './Components/IQA/CompltedCourse';
import IqaFeedback from './Components/IQA/IqaFeedback';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/feedback' element={ <FeedbackForm/>}/>
       

        <Route element={<PrivateRoutes/>}>
       
        <Route path='/training' element={ <TrainingCoordinator/>}/>
        <Route path='/addcourse' element={ <AddnewCourse/>}/>


        <Route path={'/iqa'} element={<IqaDashboard/>}/>
        <Route path={'/course'} element={<CompltedCourse/>}/>
        <Route path={"/iqafeed/:courseId"} element={<IqaFeedback/>}/>
        </Route>
   </Routes>
    </div>
  );
}

export default App;
