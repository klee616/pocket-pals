import style from "@/styles/CallApi.module.css";
import { useState, useEffect } from "react";
import Footer from "@/Components/Footer/"
import Header from "@/Components/Header/"
import HeadArea from "@/Components/HeadArea";
import {  useIntl } from "react-intl";

export default function CallAPI() {
  const intl = useIntl();
  const headTitle = intl.formatMessage({ id: "page.call.api.head.title" });
  const headDescription = intl.formatMessage({ id: "page.call.api.head.description" });
  const title = intl.formatMessage({ id: "page.call.api.title" });

  const [animals, setAnimals] = useState(["Marmot", "Spectacled Bear", "Teddy Bear Hamster", "Giant panda", "Numbat", "African Wild Dog", "Royal Penguin"]);
  const [resultList, setResultList] = useState([]);
  const apiKey =  process.env.NEXT_PUBLIC_API_KEY;
  console.log(apiKey);
  const callAPI = async (animal) => {
    try {
      const res = await fetch(
        `https://api.api-ninjas.com/v1/animals?name=` + animal, {
        headers: { 'X-Api-Key': apiKey }
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
    <HeadArea title={headTitle} description={headDescription} />
    <Header />
    <div className={style.main}>
        <h1>{title}</h1>
       <div className={style.buttonList}>
        {animals.map((animal, index) => {
          return (<><button className={style.filterButton} onClick={() => callAPI(animal)} key={index}>{animal}</button></>);

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
          <div key={index} style={{'text-align':"left"}}> 
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
      </div>
        <Footer />
    </>
  );
}
