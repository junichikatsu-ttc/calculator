import React from 'react';

const App: React.FunctionComponent = () => {
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
          {/* 「+」等のボタンを実装する */}
        </div>
      </div>
    </div>
  );
}

export default App;
