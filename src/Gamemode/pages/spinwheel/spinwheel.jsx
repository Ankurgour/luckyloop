import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import './spinwheel.css';


const SpinWheel = () => {

    // const onSpin=()=>{
    //     let wheel = document.querySelector('.wheel');
    //     let spinBtn = document.querySelector('.spinBtn');
    //     let value  = Math.ceil(Math.random()*3600);
    //     spinBtn.onclick = function(){
    //         wheel.style.tarnsform = "rotate(" + value + " deg)";
    //     }
        
        
        
    //     }


//     const [rotationValue, setRotationValue] = useState(0);

//   const onSpin = () => {
//     const value = Math.ceil(Math.random() * 3600);
//     setRotationValue(value);
const [rotationValue, setRotationValue] = useState(0);
const wheelRef = useRef(null);
const transitionEndedRef = useRef(false);
  const rewards = [
    { reward: "1st Reward", probability: 35 },
    { reward: "2nd Reward", probability: 30 },
    { reward: "3rd Reward", probability: 20 },
    { reward: "4th Reward", probability: 10 },
    { reward: "5th Reward", probability: 2.5 },
    { reward: "6th Reward", probability: 1 },
    { reward: "7th Reward", probability: 0.5 },
    { reward: "8th Reward", probability: 0.1 }
  ];
  const [rewardss,setRewardss] =  useState([
    { id: 1, name: '1st Reward', probability: 35 },
  { id: 2, name: '2nd Reward', probability: 30 },
  { id: 3, name: '3rd Reward', probability: 20 },
  { id: 4, name: '4th Reward', probability: 10 },
  { id: 5, name: '5th Reward', probability: 2.5 },
  { id: 6, name: '6th Reward', probability: 1 },
  { id: 7, name: '7th Reward', probability: 0.5 },
  { id: 8, name: '8th Reward', probability: 0.1 },
  ]);
  const [selectedReward, setSelectedReward] = useState(null);

  useEffect(() => {
   
    if (wheelRef.current) {
      wheelRef.current.addEventListener('transitionend', () => {
        const selectedReward = generateRandomReward();
        window.alert(`You've won: ${selectedReward}`);
      }, { once: true });
    }
  }, []);

  const generateRandomReward = () => {
    const randomNumber = Math.random() * 100;
    let cumulativeProbability = 0;

    for (const reward of rewards) {
      cumulativeProbability += reward.probability;
      if (randomNumber <= cumulativeProbability) {
        return reward.reward;
      }
    }

    return "No Reward"; // Default case if random number exceeds 100 or an error occurs
  };

  const onSpin = () => {
    const value = Math.ceil(Math.random() * 36000);
    // console.log(value);
    setRotationValue(value);

    transitionEndedRef.current = false;
    setSelectedReward(null);
    


  };
 
  const handleTransitionEnd = () => {
    if (!transitionEndedRef.current) {
      transitionEndedRef.current = true;
      const selectedReward = generateRandomReward();
      window.alert(`You've won: ${selectedReward}`);

    }
}
const handleRewardChange = (index, event) => {
    const updatedRewards = [...rewards];
    updatedRewards[index].name = event.target.value;
    setRewardss(updatedRewards);
  };
  const handleRewardSubmission = (index) => {
    const updatedRewards = [...rewards];
    updatedRewards[index].name = rewardss[index].name;
    setRewardss(updatedRewards);
  };
  
  return (
    <div className='containerr'>
    <div className='spinBtn' onClick={onSpin}>SPIN</div>
    <div className='wheel' style={{ transform: `rotate(${rotationValue}deg)`}} onTransitionEnd={handleTransitionEnd}>
        <div className='number' style={{"--i":"1","--clr":"#db7093"}}><span>1st</span></div>
        <div className='number' style={{"--i":"2","--clr":"#20b2aa"}}><span>2nd</span></div>
        <div className='number' style={{"--i":"3","--clr":"#d63e92"}}><span>3rd</span></div>
        <div className='number' style={{"--i":"4","--clr":"#daa520"}}><span>4th</span></div>
        <div className='number' style={{"--i":"5","--clr":"#ff340f"}}><span>5th</span></div>
        <div className='number' style={{"--i":"6","--clr":"#ff7f50"}}><span>6th</span></div>
        <div className='number' style={{"--i":"7","--clr":"#3cb371"}}><span>7th</span></div>
        <div className='number' style={{"--i":"8","--clr":"#4169e1"}}><span>8th</span></div>
    </div>
    <div className='rewardsList'>
        <h2>Edit Rewards</h2>
        <ul>
          {rewardss.map((reward, index) => (
            <li key={reward.id} >
              {/* <input
                type='text'
                placeholder={reward.name}
                value={reward.name}
                onChange={(e) => handleRewardChange(index, e)}
              /> */}
              {/* <span>{reward.probability}%</span> */}
              <p>{reward.id}</p>
              <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRewardSubmission(index);
          }}
        >
          <input
            type='text'
            placeholder={reward.name}
            value={reward.name}
            onChange={(e) => handleRewardChange(index, e)}
          />
          <button type='submit'>Submit</button>
        </form>
            </li>
          ))}
        </ul>
      </div>
      {selectedReward && (
        <div className='selectedReward'>
          <h3>Selected Reward</h3>
          <p>{selectedReward}</p>
        </div>
      )}
      
    </div>
  )
}

export default SpinWheel
