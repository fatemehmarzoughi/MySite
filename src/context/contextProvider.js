import React from "react";
import context from "./context";

export default class ContextProvider extends React.Component{

    constructor(){
        super();
        this.state = {
            language : localStorage.getItem('language'),
            loading : true,
        }
    }

    setLanguage = (lang) => {
        this.setState({
            language : lang
        })
        localStorage.setItem('language' , lang);
    }

    setLoading = (loading) => {
        this.setState({
            loading
        })
    }


    render(){
        return(
            <context.Provider value={{
                language : this.state.language,
                setLanguage : this.setLanguage,

                loading : this.state.loading,
                setLoading : this.setLoading,
            }}>
                {this.props.children}
            </context.Provider>
        )
    }
}