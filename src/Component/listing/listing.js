import React,{Component} from "react";
import axios from "axios";
import './listing.css';
import ListingDisplay from "./ListingDisplay"


const base_url = "http://3.17.216.66:4000"

class Listing extends Component {
    constructor(){
        super()
        this.state={
            restaurantList:''
        }
    }
    render(){
        return(
           <>
            <div className="row">
                <div id="mainListing">
                    <div id="filter"></div>
                    <ListingDisplay listData={this.state.restaurantList}/>
                </div>
            </div>
           </>
        )
    }
         //api on page load 
    //      componentDidMount(){
    //         fetch(`${base_url}/quicksearch`,{method:'GET'})
    //         .then((res)=> res.json())
    //         .then((data)=>{
    //             this.setState({mealType:data})
    //         })
    // }

    componentDidMount(){
        let mealId = this.props.match.params.mealId;
        axios.get(`${base_url}/restaurant?mealtype_id=${mealId}`)
        .then((res)=> this.setState({restaurantList:res.data}))
    }
}


export default Listing;