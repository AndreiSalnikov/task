import './App.module.scss';
import style from './App.module.scss'
import Checkbox from "../Checkbox/Checkbox";

function App() {
  return (
    <main className={style.content}>
      <h1 className={style.content__title}>What do you know about the woman in the painting?</h1>
      <p className={style.content__subtitle}>Choose all the correct answers</p>
      <Checkbox text={'She came from an aristocratic Russian family'} color={'green'}></Checkbox>
      <Checkbox text={'Her family didn\'t want her to marry a painter'} color={'green'}></Checkbox>
      <Checkbox text={'Her family was very poor'} color={'red'}></Checkbox>
      <Checkbox text={'Her family didn\'t like her portraits'} color={'red'}></Checkbox>
      <Checkbox text={'She was in love a painter'} color={'green'}></Checkbox>
      <p className={style.content__story}>The woman in the paintings is the old lady's grandmother. She came from an aristocratic Russian family. She was
        in love with a painter, but her family didn't want them to get married. That's all we know about her.</p>
    </main>
  );
}

export default App;
