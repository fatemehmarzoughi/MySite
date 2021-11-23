import React from "react";

export default React.createContext({
    loading : true,
    setLoading : (loading) => {},

    language : 'eng',
    setLanguage : (language) => {},
})