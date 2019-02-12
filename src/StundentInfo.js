import React from 'react';

const studentInfo = [
    {name: 'Chudi', age: 10, hobbies: ['Singing', ' Dancing']},
    {name: 'Tong', age: 10, hobbies: ['Eating']},
    {name: 'Amold', age: 25, hobbies: ['Playing']},
    {name: 'Sodiq', age: 15, hobbies: ['Reading']},
    {name: 'Ricard', age: 30, hobbies: ['Coding']}
  ]
class StundentInfo extends React.Component {
    render() {
        return <div>
            <h1>Stundent Informations</h1>
            {
                studentInfo.map((stundent, index) => {
                    return <div key={index} >
                    <h4>Name: {stundent.name}, Age: {stundent.age} Hobbies inclued: {stundent.hobbies}
                    </h4>
       
                    </div>
                       
                   
                })
            }
        </div>
    }
}

export default StundentInfo;