function getDomain(hasDashboard = 'yes'){
    let domainName =''
    let hostName = window.location.hostname
    if( hostName == 'localhost' ){
        domainName = 'https://dev.nurabi.net/api/dashboard/'
    }else if( hostName == 'dashboard.dev.nurabi.net' ){
        domainName = 'https://dev.nurabi.net/api/dashboard/'
    }else if( hostName == 'dashboard.test.nurabi.net' ){
        domainName = 'https://test.nurabi.net/api/dashboard/'
    }else if( hostName == 'dashboard.nurabi.net' ){
        domainName = 'https://nurabi.net/api/dashboard/'
    }
    else if( hostName == 'dashboard.dev.nurabi.live' ){
        domainName = 'https://dev.nurabi.live/api/dashboard/'
    }else if( hostName == 'dashboard.test.nurabi.live' ){
        domainName = 'https://test.nurabi.live/api/dashboard/'
    }
    else{
        domainName = 'https://nurabi.live/api/dashboard/'
    }
    if(hasDashboard == 'no' ){
        domainName = domainName.slice(0 , -10); 
        
    }
    
    
    
    return domainName
}

export default getDomain
