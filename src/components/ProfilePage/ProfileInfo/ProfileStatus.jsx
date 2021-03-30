import React from 'react'
import styles from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    
    /* Локальный state для классовой компоненты */
    state={
        editMode:false,
        status:this.props.status
    }
    activateEditMode=()=>{
        this.setState({
            editMode:true
        })
        this.props.updateStatus(this.state.status)
    }
    deactivateEditMode=()=>{
        this.setState({
            editMode:false
        })
    }

    onStatusChange=(e)=>{
        this.setState({
            status:e.currentTarget.value
        })       
    }

    componentDidUpdate(prevProps, prevState){
        debugger
        if(prevProps.status!==this.props.status){
            this.setState({
                status:this.props.status
            })
        }
        
    }

    render(){
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input
                        onChange={this.onStatusChange}
                        autoFocus ={true} 
                        onBlur={this.deactivateEditMode} 
                        value={this.state.status}/>
                    </div>
                }
            </div>      
        )
    }
    
}

export default ProfileStatus