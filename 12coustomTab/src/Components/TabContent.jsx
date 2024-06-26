import React from 'react'
import Tabs from './Tabs';

function TabContent() {


  const pet = [
    {
      label: "Koala",
      content: "Koalas sleep around 20 hours a day and are known for their eucalyptus diet.",
    },
    {
      label: "dog",
      content: " dog is pet animal . in indian family atleast every home has a dog",
    },
    {
      
      label: "Zebra",
      content: "Zebras have distinctive black and white stripes that act as a natural defense against predators.",
    },
    {

      label: "Elephant",
      content: "Elephants have the largest brains among land animals and demonstrate remarkable intelligence.",
    },
    {
      label: "Horse",
      content: "Horses have excellent memory and are capable of recognizing human emotions.",
    },
  ];
  return (
    <div>
      <Tabs pet={pet} />
      
    </div>
  )
}

export default TabContent
