import React from "react"
import { Button, Segment } from 'semantic-ui-react'



export default function Navbar(props) {
    return(
        
        <div className="row">
            <div className="col-md-6 p-5">
                <h1 classname="Title">Weather App</h1>
            </div>
              <div className="Navbar col-md-6 p-3 offset-3">
                  <form className='region' onSubmit={(e)=>props.changeWeather(e) } >
                      <input className='regioninput' placeholder='Enter Location' onChange={(e)=>{
                        props.changeRegion(e.target.value) //this'll get fire from app.js since its a prop?

                      } } />
                              <Button className='ui green button'>Submit</Button>
                  </form>
            
            </div>



        </div>




    )




}