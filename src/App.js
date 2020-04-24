import React, {useEffect, useState} from 'react';
import './App.css';
import {Button, Input, Card, Table} from 'antd';
import alasql from 'alasql';

const { TextArea } = Input;



function computeTableColumnData(data){
  return Object.keys(data).map((key)=>{
    return {title: key, dataIndex: key, key: 'key'}
  });
}

function App() {
  const [SQLValue, setSQLValue] = useState('');
  const [tableColumn, setTableColumn] = useState([]);
  const [tableDataSource, setTableDataSource] = useState([]);
  useEffect(()=>{
    insertData();
  }, [1]);

  const insertData = ()=>{
    alasql("CREATE TABLE students (key string, name string, score number, sex string)");
    alasql(`insert into students values ('1', '小明', 90, 'male'), ('2', '小红', 91, 'female'), ('3', '小白', 92, 'male')`);
  };

  const handleExecuteSQL = ()=>{
    try{
      let dataSource = alasql(SQLValue);
      let columns = computeTableColumnData(dataSource[0]);

      setTableColumn(columns);
      setTableDataSource(dataSource);
    }catch (e) {
      alert('sql语法错误')
    }
  };

  const handleChangeSQL = (e)=>{
    setSQLValue(e.target.value)
  };

  return (
    <div className="App">
      <Card title="sql 输入框" style={{ width: 600 }}>
        <TextArea rows={4}
          value={SQLValue}
          onChange={handleChangeSQL}
          onPressEnter={handleExecuteSQL}
        />
        <Button onClick={handleExecuteSQL}>执行语句</Button>
      </Card>

      <Card title="语句结果" style={{ width: 600 }}>
        <Table columns={tableColumn} dataSource={tableDataSource}/>
      </Card>

    </div>
  );
}

export default App;
