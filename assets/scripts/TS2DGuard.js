var ts2dguard = {
    connect: "/Connect",
    id: "DGuardText",
    html: {},
    http: {
        res: "",
        headers: "",
        body: "",
    },
    changeLoginMode: false,
};

ts2dguard.html = document.getElementById( ts2dguard.id );
//ts2dguard.html.innerHTML = "Connecting to TS2DGuard...";
ts2dguard.html.innerHTML = "Searching for your IP address...";

ts2dguard.reset = function() {
    this.http.body = "";
    this.http.headers = "";
}

/**
 * 
 * @param {string} data 
 * @returns 
 */
ts2dguard.parse = function(data) {
    if(!data || !data.length) return;
    
    this.reset();
    //this.http.res = data.split("\r\n");
    //for(var i = 0; i < this.http.res.length; i++)
    //{
    //    //if( this.http.body === "" && this.http.res[i].indexOf( "body:" ) >= 0 )
    //    //{
    //    //    this.http.body = this.http.res[i].replace("body:", "");
    //    //}
    //    //else 
    //    if( this.http.headers === "" && this.http.res[i].indexOf( "headers:HTTP/1.1" ) >= 0 )
    //    {
    //        this.http.headers = this.http.res;
    //        this.http.body = "SUCCEED";
    //        break;
    //    }
    //}
    if(data.indexOf("HTTP/1.1"))
        this.http.body = "SUCCEED";
    else
        this.http.headers = data;
}

ts2dguard.onInit = function() {
    //this.parse( cpp.http_get(cpp.getDGuardUrl() + this.connect) );
    //this.onConnect();
    
    myip(function(response){
        try {
            console.log(response);
            var json= {};
            if( response.indexOf("}") )
                json = JSON.parse(response);
            else
                json.ipaddress = response;
            //console.log("<p>Public IP address: "+json.ipaddress+"</p>");
            //console.log("<p>Proxy IP address: "+json.proxy+"</p>");
            ts2dguard.html.innerHTML = "Your IP Address: " + json.ipaddress + "<br><br>" + "Connecting to TS2DGuard...";
            setTimeout( function() {
                ts2dguard.parse( cpp.http_get( "?myip="+json.ipaddress ) );
                ts2dguard.onConnect();
            }, 250 );
        } catch (error) {
            console.log("parse error");
        }
    });
}

ts2dguard.onConnect = function() {
    if( this.http.body === "SUCCEED" ) {

        this.setText( this.http.body );
        setTimeout( function() {
            ts2dguard.changeLoginMode = true;
        }, 250);

    } else if ( this.http.headers.length > 0 ){
        this.setText( this.http.http );
    } else {
        this.setText( this.http.body );
    }
}

ts2dguard.setText = function(text) {
    this.html.innerHTML = text;
    console.log(text);
}

ts2dguard.off = function() {
    this.html.style.display = "none";
    document.getElementById("DGuardArea").style.display = "none";
}

ts2dguard.changeToLoginMode = function() {
    if(this.changeLoginMode)
    {
        this.changeLoginMode = false;
        return true;
    }
    return false;
}
