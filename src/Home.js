import { React  } from "react";
import Cards from './Cards';
import Counter from './Counter';
import Form from './Forms';
import ButtonManagement from './ButtonControl';
import MultiTxtInput from './molecules/MultiTxtInputs';
import Posts from './Posts';
import UserPost from './molecules/UserPost';
import Upload from "./tasks/Upload";

function Home() {

  return (
    <div className="py-m px-m md:px-36">
      <Form />
      <Cards />
      <Counter />
      <ButtonManagement />
      <MultiTxtInput />
      <Posts />
      <UserPost />
      <Upload />
    </div>
  );
}

export default Home;
