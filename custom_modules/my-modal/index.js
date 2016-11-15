import React from 'react';
import {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
export default class MyModal extends Component {
   constructor(props) {
     super(props);
     this.state = {};
   }
   close(){
     this.setProps({isOpen:false});
   }
    render() {
        if(this.props.isOpen){
            return (
              <div style={{display: "block",textAlign: "center",zIndex: 9999,position: "fixed",height: "100%",width: "100%",top: 0,left: 0,backgroundColor: "rgba(0,0,0,0.7)"}}>
              <ReactCSSTransitionGroup transitionName={this.props.transitionName} transitionAppear={true}
                transitionAppearTimeout={1000}>
                <div className="modal"
                style={{display: "inline-block",position:"relative",top:"calc(10%)",verticalAlign: "middle",maxHeight: "90%","borderRadius": "5px",MozBorderRadius: "5px",msBorderRadius: "5px",OBorderRadius: "5px",WebkitBorderRadius: "5px",boxShadow: "0px 3px 10px #000",background: "#fff",textAlign: "center",border: "1px solid #afaeac",float:"none"}}>
                  {this.props.children}
                  <div onClick={this.props.closeCallback} className="abc" style={{zIndex:9999,position: "absolute",right: "-15px",top: "-15px",height: "30px",width: "30px",display: "inline-block",cursor:"pointer"}}><img  src="assets/images/error.png"/></div>

                </div>

              </ReactCSSTransitionGroup>
                  </div>
            );
        } else {
            return <ReactCSSTransitionGroup transitionName={this.props.transitionName} />;
        }
    }
}
