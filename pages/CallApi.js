import { useState, useEffect } from "react";
export default function CallAPI() {
  const [animals, setAnimals] = useState(["Marmot", "Spectacled Bear", "Teddy Bear Hamster", "Giant panda", "Numbat", "African Wild Dog", "Royal Penguin"]);
  const [resultList, setResultList] = useState([]);
  const callAPI = async (animal) => {
    try {
      const res = await fetch(
        `https://api.api-ninjas.com/v1/animals?name=` + animal, {
        headers: { 'X-Api-Key': "G4R5Q6eIcdrnEqBxzuPZX2TWl4PipIeWrg0IFiPN" }
        // headers: { 'X-Api-Key': process.env.PUBLIC_API_KEY  }
      }
      );
      const data = await res.json();
      setResultList(data);
      console.log(data)
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div>
        {animals.map((animal, index) => {
          return (<><button onClick={() => callAPI(animal)} key={index}>{animal}</button></>);

        })}
      </div>
      {resultList && resultList.map((animal, index) => {
        console.log(animal)
        let taxonomyList = [];
        for (let item in animal.taxonomy) {
          taxonomyList.push({key:item, value:animal.taxonomy[item]});
        }
        let characteristicsList = [];
        for (let item in animal.characteristics) {
          characteristicsList.push({key:item, value:animal.characteristics[item]});
        }
        return (<>
          <div key={index}>
            <p>Name : {animal.name} </p>
            <p>Taxonomy :
              {taxonomyList.map((item, key) => {  return (<>{item.key} - {item.value}<br /></>) })}
            </p>
            <p>Location :<br />
              {animal.locations.map((item, key) => { return (<>{item}<br /></>) })}
            </p>
            <p>Characteristics :<br />
              {characteristicsList.map((item, key) => {  return (<>{item.key} - {item.value}<br /></>) })}
            </p>
          </div>

        </>);
      })
      }
    </>
  );
}
