import './App.css';
import { BackgroundChange } from './Components/BackgroundChange';
import { PasswordGenerator } from './Components/PasswordGenerator';

export default () => {
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }} className='flex text-3xl font-bold bg-gray-500 text-white rounded-xl p-4 m-4'>React Learning </h1> */}
      {/* <BackgroundChange /> */}
      <PasswordGenerator />
    </>
  )
}