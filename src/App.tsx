import React from 'react';
import { Button } from './components/Button';

const App: React.FunctionComponent = () => {
  const onClick = (key:string):void=>{
    console.log(`${key} Button click!`);
  }
  return (
    <div className="calc">
      <header>電卓</header>
      <div className="display">
        {/* 計算結果の表示を実装する */}
      </div>
      <div className="input">
        <div className="numbers">
          {/* 数字のボタンや「.」、「=」ボタン */}
        </div>
        <div className="operators">
          <Button onClick={()=>{ onClick('+'); }} label={'+'}/>
        </div>
      </div>
    </div>
  );
}

export default App;
