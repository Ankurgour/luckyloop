import React from 'react';
import './gamehome.css'
import logo from './logo.jpg';
import mdi from './mdi.jpg';
import ico  from './ooui_next-ltr.jpg'
import layout1 from './layout1.png';
import sidebar from './sidebar.jpg';
import products from './package 1.jpg';
import problem from './ph_question.jpg';
import column21 from './column21.png';
import arrow from './arrow.png';
import { Link } from 'react-router-dom';


const gamehome = () => {
  return (
    <div className='container'>
    <nav className='navbar'>
        <img src={logo} alt="code-tikki logo" />
    </nav>
    <div className='content'>
        <div className='column1'>
        <div className="box">
            <div className='inside'>
                <img className='first' src={mdi} alt="" />
                <a href=""><p className='desc'>Dashboard</p></a>
                {/* <img className='second' src={ico} alt="" /> */}
                <a href=""><img className='second' src={ico} alt="" /></a>
            </div>

            <div className='inside'>
                <img className='first' src={sidebar} alt="" />
                {/* <p className='desc'>Dashboard</p> */}
                <a href=""><p className='desc'>Sidebar Type</p></a>
                {/* <img className='second' src={ico} alt="" /> */}
                <a href=""><img className='second' src={ico} alt="" /></a>
            </div>
            <div className='inside'>
                <img className='first' src={layout1} alt="" />
                {/* <p className='desc'>Dashboard</p> */}
                <a href=""><p className='desc'>Page Layout</p></a>
                <a href=""><img className='second' src={ico} alt="" /></a>
            </div>
            {/* <div></div>
            <div></div> */}
        </div>
          <div className="box">
          <div className='inside'>
                <img className='first' src={products} alt="" />
                <a href="/spin-wheel"><p className='desc'>Games</p></a>
                {/* <img className='second' src={ico} alt="" /> */}
                <a href=""><img className='second' src={ico} alt="" /></a>
            </div>

            <div className='inside'>
                <img className='first' src={problem} alt="" />
                {/* <p className='desc'>Dashboard</p> */}
                <a href=""><p className='desc'>Sidebar Type</p></a>
                {/* <img className='second' src={ico} alt="" /> */}
                <a href=""><img className='second' src={ico} alt="" /></a>
            </div>
            </div>
          <div className="box"><div className='inside'><p>option3</p></div></div>
        </div>
        <div className='column2'>
            <div className="horizontalBox">
                {/* <h3><span style={{color:" #FF4D00", fontFamily:"Syne"}}>Welcome</span></h3>
                <h4 style={{fontFamily:"Syne"}}>Divya Mhatre</h4>
                <img src={column21} alt="" /> */}
                <div className="text">
              <h3><span style={{ fontFamily: "Syne",color: "#FF4D00",
  fontSize: "34px",
  fontWeight: "500",
  lineHeight: "41px",
  letterSpacing: "0em",
  textAlign: "center"}}>Welcome</span></h3>
              <h4 style={{ fontFamily: "Syne",
  fontSize: "32px", 
  fontWeight: "700",
  lineHeight: "38px",
  letterSpacing: "0em",    
  textAlign: "center"}}>Divya Mhatre</h4>
            </div>
            <img src={column21} alt="" />
            </div>

          {/* Two vertical divs side by side */}
          <div className="verticalBox">1vwsd</div>
          <div className="verticalBox">2vhbberr</div>
        </div>
        <div className='column3'>
        <div className='box1'>
            <h2 style={{fontFamily: "Syne",
fontSize: "28px",
fontWeight: "500",
lineHeight: "34px",
letterSpacing: "0em",
// textAlign: "center"
marginLeft:"30px"
}}>Task</h2>
<div className='line'>
    <img src={arrow} alt="" />
    <p>This line should contain 10 </p>
</div>
<div className='line'>
    <img src={arrow} alt="" />
    <p>Programming </p>
</div>
<div className='line'>
    <img src={arrow} alt="" />
    <p>Programming </p>
</div>

        </div>
  <div className='box2'></div>
  <div className='box3'></div>  
        </div>
    </div>
      
    </div>
  )
}

export default gamehome;
