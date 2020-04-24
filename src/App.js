import React, {useEffect} from 'react';
import './App.css';
import {Button, Input, Card, Table} from 'antd';
import alasql from 'alasql';

const { TextArea } = Input;

function App() {
  useEffect(()=>{
    insertData();
  }, [1]);

  const insertData = ()=>{
    alasql("CREATE TABLE students (name string, score number, sex string)");
    alasql(`insert into students values ('小明', 90, 'male'), ('小红', 91, 'female'), ('小白', 92, 'male')`);
  };

  return (
    <div className="App">
      <Card title="sql 输入框" style={{ width: 600 }}>
        <TextArea rows={4} />
        <Button>执行语句</Button>
      </Card>

      <Card title="语句结果" style={{ width: 600 }}>
        <Table />
      </Card>

    </div>
  );
}

export default App;
