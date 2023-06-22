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
ts2dguard.html.innerHTML = "Connecting to TS2DGuard...";

ts2dguard.reset = function() {
    this.http.body = "";
    this.http.headers = "";
}

ts2dguard.parse = function(data) {
    if(!data || !data.length) return;
    
    this.reset();
    this.http.res = data.split("\r\n");
    for(var i = 0; i < this.http.res.length; i++)
    {
        if( this.http.body === "" && this.http.res[i].indexOf( "body:" ) >= 0 )
        {
            this.http.body = this.http.res[i].replace("body:", "");
        }
        else if( this.http.headers === "" && this.http.res[i].indexOf( "headers:HTTP/1.1" ) >= 0 )
        {
            this.http.headers = this.http.res;
        }
    }
}

ts2dguard.onInit = function() {
    this.parse( cpp.http_get(cpp.getDGuardUrl() + this.connect) );
    this.onConnect();
}

ts2dguard.onConnect = function() {
    if( this.http.body === "SUCCEED" ) {
        this.changeLoginMode = true;
        this.setText( this.http.body );
    } else if ( this.http.headers.length > 0 ){
        this.setText( this.http.http );
    } else {
        this.setText( this.http.body );
    }
}

ts2dguard.setText = function(text) {
    this.html.innerHTML = text;
}

ts2dguard.off = function() {
    this.html.style.display = "none";
}

ts2dguard.changeToLoginMode = function() {
    if(this.changeLoginMode)
    {
        this.changeLoginMode = false;
        return true;
    }
    return false;
}
